outfit = Outfit.create!(name: 'Warm')

clothing_items = [
  'marmot-rom-jacket',
  'uniqlo-ultra-lite-down-vest',
  'wool-prince-better-button-down',
  # long shirt
  'stonemaster-pant',
  'uniqlo-heattech-long-john',
  # long socks
]
clothing_items.each do |clothing_item|
  outfit.clothing_items << ClothingItem.friendly.find(clothing_item)
end
