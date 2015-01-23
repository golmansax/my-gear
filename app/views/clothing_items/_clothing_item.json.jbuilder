json.call clothing_item, :brand, :model, :first_purchase_date, :type, :usage
json.id clothing_item.slug
json.image_path "/assets/#{clothing_item.slug}.jpg"
