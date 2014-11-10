slug_params = { brand: 'Uniqlo', model: 'Down Jacket' }
clothing_item = Outerwear.find_or_create_by!(slug_params) do |created_item|
  created_item.first_purchase_date = Date.parse('2014-10-30')
  created_item.recent_purchase_date = Date.parse('2014-11-01')
end
json.partial! 'clothing_items/clothing_item', clothing_item: clothing_item
