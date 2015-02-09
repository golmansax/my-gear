require 'rails_helper'

describe ClothingItemsController do
  let!(:outerwear) {  create(:outerwear) }
  let(:outerwear_as_json) do
    {
      brand: 'Marmot',
      model: 'ROM Jacket',
      id: 'marmot-rom-jacket',
      imagePath: '/assets/marmot-rom-jacket.jpg',
      usage: 'heavy',
      type: 'Outerwear',
      purchaseIds: outerwear.purchases.pluck(:id),
    }
  end

  describe '#index' do
    it 'returns a json of clothing items' do
      get(:index, format: :json)

      expected_response = [outerwear_as_json].map(&:with_indifferent_access)
      expect(JSON.parse(response.body)).to eq(expected_response)
    end
  end

  describe '#show' do
    it 'returns a json of a clothing item' do
      get(:show, format: :json, id: 'marmot-rom-jacket')

      expected_response = {
        clothingItem: outerwear_as_json,
      }.with_indifferent_access
      expect(JSON.parse(response.body)).to eq(expected_response)
    end
  end
end
