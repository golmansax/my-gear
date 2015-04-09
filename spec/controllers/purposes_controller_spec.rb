require 'rails_helper'

describe PurposesController do
  describe '#index' do
    it 'returns a json of purposes' do
      purpose = create(:purpose, name: 'Lazy')
      down_jacket = create(:outerwear, brand: 'Uniqlo', model: 'Down Jacket')
      purpose.clothing_items << down_jacket

      create(:purpose, name: 'Sexy')
      get(:index, format: :json)

      expected_response = [
        { name: 'Lazy', id: 'lazy', clothingItemIds: [down_jacket.slug] },
        { name: 'Sexy', id: 'sexy', clothingItemIds: [] },
      ].map(&:with_indifferent_access)
      expect(JSON.parse(response.body)).to eq(expected_response)
    end
  end
end
