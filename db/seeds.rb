Shirt.create!(
  brand: 'Icebreaker',
  model: 'Tech T Lite Short Sleeve',
  recent_purchase_date: Date.parse('July 2014'),
  first_purchase_date: Date.parse('July 2014'),
)

Outerwear.create!(
  brand: 'Marmot',
  model: 'ROM Jacket',
  recent_purchase_date: Date.parse('May 2014'),
  first_purchase_date: Date.parse('May 2014'),
)

Pant.create!(
  brand: 'PrAna',
  model: 'Stretch Zion Pant',
  recent_purchase_date: Date.parse('June 2014'),
  first_purchase_date: Date.parse('April 2013'),
)

Footwear.create!(
  brand: 'Xero Shoes',
  model: 'DIY Connect Sandal',
  recent_purchase_date: Date.parse('March 2014'),
  first_purchase_date: Date.parse('July 2012'),
)

favorite_outfit = Outfit.create!(name: 'Favorite')
ClothingItem.all.each do |clothing_item|
  favorite_outfit.clothing_items << clothing_item
end
