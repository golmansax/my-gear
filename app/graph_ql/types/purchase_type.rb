# frozen_string_literal: true
PurchaseType = GraphQL::ObjectType.define do
  name 'Purchase'
  description 'Purchase model'
  field :clothingItemId do
    type !types.String
    description 'Clothing item ID'
    resolve proc { |purchase| purchase.clothing_item.slug }
  end
  field :purposeIds do
    type !types[!types.String]
    description 'List of Purpose IDs'
    resolve proc { |purchase| purchase.purposes.map(&:slug) }
  end
  field :id, !types.Int, 'Unique ID'
  field :date, !types.String, 'Purchase date'
  field :version, !types.String, 'Version'
end
