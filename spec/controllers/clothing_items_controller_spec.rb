require 'rails_helper'

describe ClothingItemsController do
  describe '#index' do
    it 'returns a json of clothing items' do
      outerwear = create(:outerwear)
      get(:index, format: :json)

      outerwear_json_builder = Jbuilder.new do |json|
        json.array! [outerwear], :brand, :model, :id
      end
      expect(response.body).to eq(outerwear_json_builder.target!)
    end
  end

  describe '#show' do
    it 'returns a json of a clothing item' do
      outerwear = create(:outerwear)
      get(:show, format: :json, id: outerwear.id)

      outerwear_json_builder = Jbuilder.new do |json|
        json.call outerwear, :brand, :model, :id
      end
      expect(response.body).to eq(outerwear_json_builder.target!)
    end
  end
end
