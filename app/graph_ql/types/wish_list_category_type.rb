# frozen_string_literal: true
WishListCategoryType = GraphQL::ObjectType.define do
  name 'WishListCategory'
  description 'WishListCategory model'
  field :id, !types.ID, 'Unique ID'
  field :name, !types.String, 'Name'
  field :clothingItemIds do
    type !types[!types.ID]
    description 'List of ClothingItem IDs'
    resolve proc { |wish_list_category| wish_list_category.clothing_item_ids }
  end
end
