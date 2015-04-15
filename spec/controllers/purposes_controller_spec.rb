require 'rails_helper'

describe PurposesController do
  describe '#index' do
    it 'returns a json of purposes' do
      purpose = create(:purpose, name: 'Lazy')
      down_jacket = create(:outerwear, brand: 'Uniqlo', model: 'Down Jacket')
      purchase = down_jacket.purchases.first
      purpose.clothing_items << down_jacket

      create(:purpose, name: 'Sexy')
      get(:index, format: :json)

      expected_response = [
        { name: 'Lazy', id: 'lazy', purchaseIds: [purchase.id] },
        { name: 'Sexy', id: 'sexy', purchaseIds: [] },
      ].map(&:with_indifferent_access)
      expect(JSON.parse(response.body)).to eq(expected_response)
    end
  end
end
