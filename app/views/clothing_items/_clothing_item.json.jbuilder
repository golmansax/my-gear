json.call clothing_item, :brand, :model, :type
json.usage clothing_item.purchases.last.usage
json.id clothing_item.slug
json.image_path "/assets/#{clothing_item.slug}.jpg"
