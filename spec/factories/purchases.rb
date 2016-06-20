# frozen_string_literal: true
FactoryGirl.define do
  factory :purchase do
    date Time.zone.today
    version 'Navy'
    clothing_item
  end
end
