json.array! @clothing_items do |clothing_item|
  json.call clothing_item, :model, :type
  json.brand_id clothing_item.brand.slug
  json.brand clothing_item.brand.name
  json.id clothing_item.slug
  json.image_path image_path("#{clothing_item.slug}.jpg")
  json.purchase_ids clothing_item.purchases.map(&:id)
end
