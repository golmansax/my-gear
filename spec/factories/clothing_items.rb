FactoryGirl.define do
  factory :clothing_item do
    brand 'Chalk'
    model 'Hoodie'
    first_purchase_date Date.today
    recent_purchase_date Date.today

    factory :outerwear, class: 'Outerwear' do
      brand 'Marmot'
      model 'ROM Jacket'
      first_purchase_date Date.parse('July 2014')
      recent_purchase_date Date.parse('July 2014')
    end
  end
end
