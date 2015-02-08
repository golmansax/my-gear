FactoryGirl.define do
  factory :purchase do
    date Date.today
    usage 'specialized'
    version 'Navy'
    clothing_item
  end
end
