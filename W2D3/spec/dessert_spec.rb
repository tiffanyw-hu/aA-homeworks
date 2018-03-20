require 'rspec'
require 'dessert'

=begin
Instructions: implement all of the pending specs (the `it` statements without blocks)! Be sure to look over the solutions when you're done.
=end

describe Dessert do
  let(:chef) { double("chef") }
  let(:cremebrulee) { Dessert.new("cremebrulee", 150, chef)}

  describe "#initialize" do
    it "sets a type" do
      expect(cremebrulee.type).to eq("cremebrulee")

    it "sets a quantity" do
      expect(cremebrulee.quantity).to eq(150)

    it "starts ingredients as an empty array" do
      expect(cremebrulee.ingredients).to eq([])

    it "raises an argument error when given a non-integer quantity" do
      expect { Dessert.new("cremebrulee", "", chef) }.to raise_error(ArgumentError)
  end

  describe "#add_ingredient" do
    it "adds an ingredient to the ingredients array" do
      cremebrulee.add_ingredient("vanilla")
      expect(cremebrulee.ingredients).to include("vanilla")
  end

  describe "#mix!" do
    it "shuffles the ingredient array" do
    ingredients = ["vanilla", "eggs", "salt", "heavy cream", "sugar"]

    ingredients.each do |ingredient|
      cremebrulee.add_ingredient(ingredient)
    end

    expect(cremebrulee.ingredients).to eq(ingredients)
    cremebrulee.mix!
    expect(cremebrulee.ingredients.sort).to eq(ingredients.sort)
    expect(cremebrulee.ingredients).to not_eq(ingredients)
    end
  end

  describe "#eat" do
    it "subtracts an amount from the quantity" do
      cremebrulee.eat(50)
      expect(cremebrulee.quantity).to eq(100)


    it "raises an error if the amount is greater than the quantity" do
      expect(cremebrulee.eat(200)).to raise_error("That's greater than the initial amount")
    end
  end

  describe "#serve" do
    it "contains the titleized version of the chef's name" do
      allow(chef).to receive(:titleize).and return("Chef The Chef")
      expect(cremebrulee.serve).to eq("Chef the Chef has made 150 cremebrulees")
    end
  end

  describe "#make_more" do
    it "calls bake on the dessert's chef with the dessert passed in" do
      expect(chef).to receive(:bake).with(cremebrulee)
      cremebrulee.make_more
    end
  end
end
