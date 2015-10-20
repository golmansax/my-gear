QueryType = GraphQL::ObjectType.define do
  name 'Query'
  description 'The query root of this schema'

  field :clothingItems do
    type !types[!ClothingItemType]
    description 'All clothing items'
    resolve proc { ClothingItem.all.includes(:purchases, :brand) }
  end

  field :brands do
    type !types[!BrandType]
    description 'All brands'
    resolve proc { Brand.all.includes(:purchases) }
  end

  field :purchases do
    type !types[!PurchaseType]
    description 'All purchases'
    resolve proc { Purchase.all.includes(:purposes, :clothing_item) }
  end
end
