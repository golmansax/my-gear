json.array! @clothing_items do |clothing_item|
  json.call clothing_item, :brand, :model, :type
  json.id clothing_item.slug
  json.image_path image_path("#{clothing_item.slug}.jpg")
  json.purchase_ids clothing_item.purchases.map(&:id)
  json.purpose_ids clothing_item.purposes.map(&:slug)
end
