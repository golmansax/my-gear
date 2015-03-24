json.cache!(@outfit) do
  json.partial! 'outfit', outfit: @outfit
  json.clothing_item_ids outfit.clothing_items.pluck(:slug)
end
