json.cache!(@clothing_item) do
  json.partial! 'clothing_items/clothing_item', clothing_item: @clothing_item
  json.purchaseIds clothing_item.purchases.pluck(:id)
end
