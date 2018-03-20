class LRUCache

  attr_reader

    def initialize(size)
      @cache = []
      @size = size
    end

    def count
      cache.count
      # returns number of elements currently in cache
    end

    def add(el)
      if @cache.include?(el)
        @cache.delete(el)
        @cache << el
      elsif self.size > @cache.count
        @cache.shift
        @cache << el
      else
        @cache << el
      end 
      # adds element to cache according to LRU principle
    end

    def show
      p @cache
      # shows the items in the cache, with the LRU item first
    end

    private
    # helper methods go here!

  end
