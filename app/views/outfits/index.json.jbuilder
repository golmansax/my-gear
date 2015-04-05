json.array! @outfits do |outfit|
  json.call outfit, :name
  json.id outfit.slug
  json.clothing_item_ids outfit.clothing_items.map(&:slug)
end
