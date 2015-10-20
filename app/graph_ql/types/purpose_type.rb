PurposeType = GraphQL::ObjectType.define do
  name 'Purpose'
  description 'Purpose model'
  field :id do
    type !types.String
    description 'Unique ID'
    resolve proc { |purpose| purpose.slug }
  end
  field :purchaseIds do
    type !types[!types.Int]
    description 'List of Purchase IDs'
    resolve proc { |purpose| purpose.purchases.map(&:id) }
  end
  field :date, !types.String, 'Purchase date'
  field :name, !types.String, 'Name'
end
