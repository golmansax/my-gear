outfit = Outfit.create!(name: 'Favorite')

clothing_items = [
  'marmot-rom-jacket',
  'icebreaker-tech-t-lite-short-sleeve',
  'prana-stretch-zion-pant',
  'exofficio-give-n-go-sport-brief',
  'xero-shoes-diy-sandal',
]
clothing_items.each do |clothing_item|
  outfit.clothing_items << ClothingItem.friendly.find(clothing_item)
end
