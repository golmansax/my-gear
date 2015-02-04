outfit = Outfit.create!(name: 'Formal')

clothing_items = [
  'wool-prince-better-button-down',
  'stonemaster-pant',
  'uniqlo-airism-boxer-brief',
  'injinji-run-2-0-lightweight-no-show-nuwool',
  'xero-shoes-diy-sandal',
  'lems-nine2five',
]
clothing_items.each do |clothing_item|
  outfit.clothing_items << ClothingItem.friendly.find(clothing_item)
end
