WishListCategoryType = GraphQL::ObjectType.define do
  name 'WishListCategory'
  description 'WishListCategory model'
  field :id, !types.ID, 'Unique ID'
  field :name, !types.String, 'Name'
  field :clothingItemIds, !types[!types.ID], 'List of ClothingItem IDs'
end
