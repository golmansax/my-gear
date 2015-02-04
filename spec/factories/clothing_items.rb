FactoryGirl.define do
  factory :clothing_item do
    brand 'Chalk'
    model 'Hoodie'
    #first_purchase_date Date.today
    #recent_purchase_date Date.today
    type 'Need to overwrite this'

    factory :outerwear, class: 'Outerwear' do
      type 'Outerwear'
      brand 'Marmot'
      model 'ROM Jacket'
      usage 'heavy'
      #first_purchase_date Date.parse('July 2014')
      #recent_purchase_date Date.parse('July 2014')
    end
  end
end
