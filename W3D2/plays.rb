require 'sqlite3'
require 'singleton'

class PlayDBConnection < SQLite3::Database
  include Singleton

  def initialize
    super('plays.db')
    self.type_translation = true
    self.results_as_hash = true
  end
end

class Play
  attr_accessor :title, :year, :playwright_id

  def self.all
    data = PlayDBConnection.instance.execute("SELECT * FROM plays")
    data.map { |datum| Play.new(datum) }
  end

  def self.find_by_title(title)
    title = PlayDBConnection.instance.execute(<<-SQL)
          SELECT
            *
          FROM
            plays
          WHERE
            title = ?
    SQL
    Play.new(play.first)
  end

  def self.find_by_playwright(name)
    playwright = PlayDBConnection.find_by_name(<<-SQL, playwright_id)
      SELECT
        *
      FROM
        plays
      WHERE
        playwright_id = ?
      SQL

    plays.map { |play| Play.new(play)}
  end

  def initialize(options)
    @id = options['id']
    @title = options['title']
    @year = options['year']
    @playwright_id = options['playwright_id']
  end

  def create
    raise "#{self} already in database" if @id
    PlayDBConnection.instance.execute(<<-SQL, @title, @year, @playwright_id)
      INSERT INTO
        plays (title, year, playwright_id)
      VALUES
        (?, ?, ?)
    SQL
    @id = PlayDBConnection.instance.last_insert_row_id
  end

  def update
    raise "#{self} not in database" unless @id
    PlayDBConnection.instance.execute(<<-SQL, @title, @year, @playwright_id, @id)
      UPDATE
        plays
      SET
        title = ?, year = ?, playwright_id = ?
      WHERE
        id = ?
    SQL
  end
end

class Playwright
  def self.all
    data = PlayDBConnection.instance.execute("SELECT * FROM playwright")
    data.map { |datum| Playwright.new(datum) }
  end

  def self.find_by_name(name)
    name = PlayDBConnection.instance.execute(<<-SQL)
          SELECT
            *
          FROM
            playwright
          WHERE
            name = ?
    SQL

    Playwright.new(playwright.first)
  end

  def initialize
      @name = options['name']
      @birth_year = options['birth_year']
      @id = options['id']
  end

  def create
      raise "#{self} already in database" if @id
      PlayDBConnection.instance.execute(<<-SQL, @name, @birth_year)
        INSERT INTO
          plays (name, birth_year)
        VALUES
          (?, ?)
      SQL
      @id = PlayDBConnection.instance.last_insert_row_id
  end

  def update
    raise "#{self} not in database" unless @id
    PlayDBConnection.instance.execute(<<-SQL, @name, @birth_year, @id)
      UPDATE
        plays
      SET
        name = ?, birth_year = ?
      WHERE
        id = ?
    SQL
  end

  def get_plays
    raise "#{self} not in database" if !@id
    plays = PlayDBConnection.instance.execute(<<-SQL, @id)
      SELECT
        *
      FROM
        plays
      WHERE
        playwright_id = ?
    SQL
    plays.map { |play| Play.new(play)}
  end




end
