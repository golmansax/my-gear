json.call clothing_item, :brand, :model, :first_purchase_date, :type, :usage
json.id clothing_item.slug
json.image_path image_path("#{clothing_item.slug}.jpg")
