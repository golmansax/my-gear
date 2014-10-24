json.call @outfit, :name
json.id @outfit.slug
json.clothing_items @outfit.clothing_items, :brand, :model, :id
