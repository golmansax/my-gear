json.cache!(@outfits) do
  json.array! @outfits do |outfit|
    json.call outfit, :name
    json.id outfit.slug
    json.clothing_item_ids outfit.clothing_items.pluck(:slug)
  end
end
