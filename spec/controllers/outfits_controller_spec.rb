require 'rails_helper'

describe OutfitsController do
  describe '#index' do
    it 'returns a json of outfits' do
      lazy_outfit = create(:outfit, name: 'Lazy')
      sexy_outfit = create(:outfit, name: 'Sexy')
      get(:index, format: :json)

      expected_output = [
        { name: 'Lazy', id: lazy_outfit.id }.with_indifferent_access,
        { name: 'Sexy', id: sexy_outfit.id }.with_indifferent_access,
      ]
      expect(JSON.parse(response.body)).to eq(expected_output)
    end
  end

  describe '#show' do
    it 'returns a json of an outfit' do
      outfit = create(:outfit, name: 'Baller')
      down_jacket = create(:outerwear, brand: 'Uniqlo', model: 'Down Jacket')
      outfit.clothing_items << down_jacket

      get(:show, format: :json, id: outfit.id)

      expected_output = {
        name: 'Baller',
        id: outfit.id,
        clothing_items: [
          { id: down_jacket.id, brand: 'Uniqlo', model: 'Down Jacket' }
        ]
      }.with_indifferent_access
      expect(JSON.parse(response.body)).to eq(expected_output)
    end
  end
end
