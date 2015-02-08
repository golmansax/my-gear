require 'rails_helper'

describe OutfitsController do
  describe '#index' do
    it 'returns a json of outfits' do
      create(:outfit, name: 'Lazy')
      create(:outfit, name: 'Sexy')
      get(:index, format: :json)

      expected_response = [
        { name: 'Lazy', id: 'lazy', clothingItemIds: [] },
        { name: 'Sexy', id: 'sexy', clothingItemIds: [] },
      ].map(&:with_indifferent_access)
      expect(JSON.parse(response.body)).to eq(expected_response)
    end
  end

  describe '#show' do
    it 'returns a json of an outfit' do
      outfit = create(:outfit, name: 'Baller')
      down_jacket = create(:outerwear, brand: 'Uniqlo', model: 'Down Jacket')
      outfit.clothing_items << down_jacket

      get(:show, format: :json, id: 'baller')

      expected_response = {
        name: 'Baller',
        id: 'baller',
        clothingItemIds: [down_jacket.slug],
      }.with_indifferent_access
      expect(JSON.parse(response.body)).to eq(expected_response)
    end
  end
end
