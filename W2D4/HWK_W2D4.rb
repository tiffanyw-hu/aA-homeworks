class Array

  def sluggish
    self.each_with_index do |el, i|
      max_length = true

      self.each_with_index do |el2, j|
        next if i == j
        max_length = false if el2 > el
      end
      return el if max_length == true
    end 
  end

  def dominant(&prc) #merge_sort
    prc = Proc.new { |x, y| x <=> y }
    return self if self.length == 1

    mid = self.length / 2
    left, right = self.take(mid), self.drop(mid)
    sorted_left, sorted_right = left.dominant(&prc), right.dominant(&prc)

    Array.merge(sorted_left, sorted_right)
  end

  def self.dominant(left, right, &prc)
    merged = []

    until left.empty? || right.empty?
      case prc.call(left.first, right.first)
      when -1
        merged << left.shift
      when 0
        merged << left.shift
      when 1
        merged << right.shift
      end
    end
    merged + left + right
  end

  def clever
    longest_count = 0
    self.each do |el|
      longest_count = el.length if el.length > longest_count
      longest_fish = el
    end
    longest_fish
  end

  def slow_dance(direction, tiles_arr)
    tiles_arr.each_with_index do |tile, i|
      return i if tile == direction
    end
  end

TILES_HASH = {
  "up" => 0,
  "right-up" => 1,
  "right" => 2,
  "right-down" => 3,
  "down" => 4,
  "left-down" => 5,
  "left" => 6,
  "left-up" => 7
}
  def fast_dance(direction, tiles_hash)
    tiles_hash[direction]
  end


end
