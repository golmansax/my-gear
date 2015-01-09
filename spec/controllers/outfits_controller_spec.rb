require 'rails_helper'

describe OutfitsController do
  describe '#index' do
    it 'returns a json of outfits' do
      create(:outfit, name: 'Lazy')
      create(:outfit, name: 'Sexy')
      get(:index, format: :json)

      expected_output = [
        { name: 'Lazy', id: 'lazy' }.with_indifferent_access,
        { name: 'Sexy', id: 'sexy' }.with_indifferent_access,
      ]
      expect(JSON.parse(response.body)).to eq(expected_output)
    end
  end

  describe '#show' do
    it 'returns a json of an outfit' do
      outfit = create(:outfit, name: 'Baller')
      down_jacket = create(:outerwear, brand: 'Uniqlo', model: 'Down Jacket')
      outfit.clothing_items << down_jacket

      get(:show, format: :json, id: 'baller')

      expected_output = {
        name: 'Baller',
        id: 'baller',
        clothingItems: [
          {
            id: 'uniqlo-down-jacket',
            brand: 'Uniqlo',
            model: 'Down Jacket',
            imagePath: '/images/uniqlo-down-jacket.jpg',
            firstPurchaseDate: '2014-07-01',
            type: 'Outerwear',
          },
        ],
      }.with_indifferent_access
      expect(JSON.parse(response.body)).to eq(expected_output)
    end
  end
end
