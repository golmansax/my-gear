Dir[File.join(Rails.root, 'db', 'seeds', '*.rb')].each { |seed| load seed }

favorite_outfit = Outfit.create!(name: 'Favorite')
ClothingItem.all.each do |clothing_item|
  favorite_outfit.clothing_items << clothing_item
end
