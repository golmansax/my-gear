require 'rails_helper'

describe BrandsController do
  let(:brand) { create(:brand) }
  let!(:outerwear) { create(:outerwear, brand: brand) }
  let(:brand_as_json) do
    {
      name: 'Chalk',
      id: 'chalk',
      purchaseIds: [outerwear.id],
    }
  end

  describe '#index' do
    it 'returns a json of brands' do
      get(:index, format: :json)

      expected_response = [brand_as_json].map(&:with_indifferent_access)
      expect(JSON.parse(response.body)).to eq(expected_response)
    end
  end
end
