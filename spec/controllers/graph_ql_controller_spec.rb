require 'rails_helper'

describe GraphQlController do
  let!(:outerwear) { create(:outerwear) }
  let(:outerwear_as_json) do
    {
      brandId: 'marmot',
      model: 'ROM Jacket',
      id: 'marmot-rom-jacket',
      type: 'Outerwear',
      imagePath: %r{/assets/marmot-rom-jacket-[0-9a-f]*\.jpg},
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
      json_response = JSON.parse(response.body)

      expect(json_response).to match(expected_response)
    end
  end
end
