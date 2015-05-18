FactoryGirl.define do
  factory :clothing_item do
    brand
    model 'Hoodie'
    type 'Need to overwrite this'
    purchases { build_list(:purchase, 1, clothing_item_id: id) }

    factory :outerwear, class: 'Outerwear' do
      type 'Outerwear'
      brand { build(:brand, name: 'Marmot') }
      model 'ROM Jacket'
      purchases do
        purchase_params = {
          date: Date.parse('July 2014'),
          clothing_item_id: id,
        }
        build_list(:purchase, 1, purchase_params)
      end
    end
  end
end
