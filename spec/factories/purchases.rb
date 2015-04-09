FactoryGirl.define do
  factory :purchase do
    date Time.zone.today
    usage 'specialized'
    version 'Navy'
    clothing_item
  end
end
