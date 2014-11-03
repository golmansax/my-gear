json.cache!(clothing_item) do
  json.call clothing_item, :brand, :model
  json.id clothing_item.slug
  json.image_path image_path("#{clothing_item.slug}.jpg")
end
