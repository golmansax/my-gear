require 'rails_helper'

describe GraphQlController do
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
  let(:query) do
    [
      'query {',
      '  clothingItems {',
      '    id,',
      '    type,',
      '    model,',
      '    imagePath,',
      '    brandId,',
      '    purchaseIds,',
      '  }',
      '}',
    ].join('')
  end

  describe '#create' do
    it 'raises an error if no query provided' do
      expect do
        post(:create)
      end.to raise_error(ActionController::ParameterMissing)
    end

    it 'allows you to query for clothing items' do
      post(:create, query: query)
      expected_response = {
        data: { clothingItems: [outerwear_as_json] },
      }.with_indifferent_access
      expect(JSON.parse(response.body)).to eq(expected_response)
    end
  end
end
