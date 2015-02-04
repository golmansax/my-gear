FactoryGirl.define do
  factory :clothing_item do
    brand 'Chalk'
    model 'Hoodie'
    type 'Need to overwrite this'
    # TODO purchases [build(:purchase)]

    factory :outerwear, class: 'Outerwear' do
      type 'Outerwear'
      brand 'Marmot'
      model 'ROM Jacket'
      usage 'heavy'
      # TODO purchases [build(:purchase, date: Date.parse('July 2014'))]
    end
  end
end
