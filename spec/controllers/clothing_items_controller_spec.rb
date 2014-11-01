require 'rails_helper'

describe ClothingItemsController do
  describe '#index' do
    it 'returns a json of clothing items' do
      create(:outerwear)
      get(:index, format: :json)

      expected_output = [
        {
          brand: 'Marmot',
          model: 'ROM Jacket',
          id: 'marmot-rom-jacket',
        }.with_indifferent_access,
      ]
      expect(JSON.parse(response.body)).to eq(expected_output)
    end
  end

  describe '#show' do
    it 'returns a json of a clothing item' do
      create(:outerwear)
      get(:show, format: :json, id: 'marmot-rom-jacket')

      expected_output = {
        brand: 'Marmot',
        model: 'ROM Jacket',
        id: 'marmot-rom-jacket',
      }.with_indifferent_access
      expect(JSON.parse(response.body)).to eq(expected_output)
    end
  end
end
