json.cache!(@clothing_item) do
  json.partial! 'clothing_items/clothing_item', clothing_item: @clothing_item
  json.purchase_ids @clothing_item.purchases.pluck(:id)
  json.purpose_ids @clothing_item.outfits.pluck(:slug)
end
