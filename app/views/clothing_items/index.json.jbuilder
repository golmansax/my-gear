json.cache!(@clothing_items) do
  json.array! @clothing_items do |clothing_item|
    json.call clothing_item, :brand, :model, :type
    json.usage clothing_item.purchases.last.usage
    json.id clothing_item.slug
    json.image_path image_path("#{clothing_item.slug}.jpg")
    json.purchase_ids clothing_item.purchases.pluck(:id)
    json.purpose_ids clothing_item.outfits.pluck(:slug)
  end
end
