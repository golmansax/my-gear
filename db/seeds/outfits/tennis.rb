outfit = Outfit.create!(name: 'Tennis')

clothing_items = [
  'icebreaker-tech-t-lite-short-sleeve',
  'prana-stretch-zion-short',
  'exofficio-give-n-go-sport-brief',
  'smartwool-phd-micro-toe-sock',
  'new-balance-696',
]
clothing_items.each do |clothing_item|
  outfit.clothing_items << ClothingItem.friendly.find(clothing_item)
end
