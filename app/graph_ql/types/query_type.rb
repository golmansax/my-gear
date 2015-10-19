require_relative 'clothing_item_type'

QueryType = GraphQL::ObjectType.define do
  name 'Query'
  description 'The query root of this schema'

  field :clothingItems do
    type !types[!ClothingItemType]
    description 'All clothing items'
    resolve proc { ClothingItem.all }
  end
end
