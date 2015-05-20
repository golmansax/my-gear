require 'rails_helper'

describe ClothingItemsController do
  let!(:outerwear) { create(:outerwear) }
  let(:outerwear_as_json) do
    {
      brandId: 'marmot',
      model: 'ROM Jacket',
      id: 'marmot-rom-jacket',
      imagePath: '/assets/marmot-rom-jacket.jpg',
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
end
