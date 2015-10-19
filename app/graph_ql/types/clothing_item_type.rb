ClothingItemType = GraphQL::ObjectType.define do
  name 'ClothingItem'
  description 'ClothingItem model'
  field :id do
    type !types.ID
    description 'Unique ID'
    resolve proc { |clothing_item| clothing_item.slug }
  end
  field :imagePath do
    type !types.String
    description 'Image'
    resolve proc { |clothing_item|
      ActionController::Base.helpers.image_path("#{clothing_item.slug}.jpg")
    }
  end
  field :brandId do
    type !types.ID
    description 'Brand ID'
    resolve proc { |clothing_item| clothing_item.brand.slug }
  end
  field :purchaseIds do
    type !types[!types.Int]
    description 'List of Purchase IDs'
    resolve proc { |clothing_item| clothing_item.purchases.map(&:id) }
  end
  field :model, !types.String, 'Model'
  field :type, !types.String, 'Type'
end
