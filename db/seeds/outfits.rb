outfits = {
  'Basketball' => ['nike-hyperfuse-basketball-shoe'],
  'Biking' => [],
  'Climbing' => ['five-ten-team-vxi'],
  'Cold Weather' => [
    'uniqlo-ultra-lite-down-vest',
    'uniqlo-extra-fine-merino-v-neck-sweater',
    # long shirt
    'stonemaster-pant',
    'uniqlo-heattech-long-john',
    # long socks
  ],
  'Favorite' => [
    'marmot-rom-jacket',
    'icebreaker-tech-t-lite-short-sleeve',
    'prana-stretch-zion-pant',
    'exofficio-give-n-go-sport-brief',
    'xero-shoes-diy-sandal',
  ],
  'Formal' => [
    'wool-prince-better-button-down',
    'stonemaster-pant',
    'uniqlo-airism-boxer-brief',
    'injinji-run-2-0-lightweight-no-show-nuwool',
    'lems-nine2five',
  ],
  'Lounging' => [
    'uniqlo-extra-fine-merino-v-neck-sweater',
    'nike-jordan-aero-fly-mania-basketball-short'
  ],
  'Tennis' => ['new-balance-696'],
}

outfits.each do |outfit_name, clothing_items|
  outfit = Outfit.create!(name: outfit_name)

  clothing_items.each do |clothing_item_id|
    outfit.clothing_items << ClothingItem.friendly.find(clothing_item_id)
  end
end
