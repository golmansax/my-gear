require 'rails_helper'

describe ClothingItemsController do
  let(:outerwear_as_json) do
    {
      brand: 'Marmot',
      model: 'ROM Jacket',
      id: 'marmot-rom-jacket',
      imagePath: '/assets/marmot-rom-jacket.jpg',
      firstPurchaseDate: '2014-07-01',
      type: 'Outerwear',
    }.with_indifferent_access
  end

  describe '#index' do
    it 'returns a json of clothing items' do
      create(:outerwear)
      get(:index, format: :json)

      expect(JSON.parse(response.body)).to eq([outerwear_as_json])
    end
  end

  describe '#show' do
    it 'returns a json of a clothing item' do
      create(:outerwear)
      get(:show, format: :json, id: 'marmot-rom-jacket')

      expect(JSON.parse(response.body)).to eq(outerwear_as_json)
    end
  end
end
