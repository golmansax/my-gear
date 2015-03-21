json.cache!(@clothing_item) do
  json.partial! 'clothing_items/clothing_item', clothing_item: @clothing_item
end
