json.call clothing_item, :brand, :model, :type
json.usage clothing_item.purchases.last.usage
json.id clothing_item.slug
json.image_path image_path("#{clothing_item.slug}.jpg")
json.purchaseIds clothing_item.purchases.pluck(:id)
