json.cache!(outfit) do
  json.call outfit, :name
  json.id outfit.slug
  json.clothing_item_ids outfit.clothing_items.map(&:id)
end
