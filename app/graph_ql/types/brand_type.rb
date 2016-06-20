# frozen_string_literal: true
BrandType = GraphQL::ObjectType.define do
  name 'Brand'
  description 'Brand model'
  field :id do
    type !types.ID
    description 'Unique ID'
    resolve proc { |brand| brand.slug }
  end
  field :purchaseIds do
    type !types[!types.Int]
    description 'List of Purchase IDs'
    resolve proc { |brand| brand.purchases.map(&:id) }
  end
  field :name, !types.String, 'Name'
end
