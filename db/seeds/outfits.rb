outfits = {
  'Basketball' => ['nike-hyperfuse-basketball-shoe'],
  'Biking' => ['novara-padded-bike-boxers'],
  'Climbing' => ['five-ten-team-vxi'],
  'Cold Weather' => [
    'uniqlo-ultra-lite-down-vest',
    'uniqlo-extra-fine-merino-v-neck-sweater',
    'uniqlo-heattech-v-neck-t-shirt-long-sleeve',
    'stonemaster-pant',
    'uniqlo-heattech-long-john',
    # long socks
  ],
  'Expressive' => [
    'american-apparel-tri-blend-t-shirt',
    'xero-shoes-diy-sandal',
    'warrior-liverpool-kit',
    'uniqlo-novak-djokovic-polo',
  ],
  'Favorite' => [
    'marmot-rom-jacket',
    'icebreaker-tech-t-lite-short-sleeve',
    'prana-stretch-zion-pant',
    'exofficio-give-n-go-sport-brief',
    'xero-shoes-diy-sandal',
  ],
  'For Girlfriend' => [
    'wool-prince-better-button-down',
    'stonemaster-pant',
    'lems-nine2five',
    'american-apparel-tri-blend-t-shirt',
  ],
  'Formal' => [
    'wool-prince-better-button-down',
    'uniqlo-ultra-lite-down-vest',
    'uniqlo-extra-fine-merino-v-neck-sweater',
    'stonemaster-pant',
    'uniqlo-airism-boxer-brief',
    'injinji-run-2-0-lightweight-no-show-nuwool',
    'lems-nine2five',
  ],
  'Frisbee' => ['inov8-bare-grip-200'],
  'Hiking' => ['inov8-bare-grip-200'],
  'Lounging' => [
    'american-apparel-tri-blend-t-shirt',
    'uniqlo-extra-fine-merino-v-neck-sweater',
    'nike-jordan-aero-fly-mania-basketball-short',
  ],
  'Swimming' => ['o-neill-hybrid-freak-short'],
  'Tennis' => ['new-balance-696-tennis'],
}

outfits.each do |outfit_name, clothing_items|
  outfit = Outfit.create!(name: outfit_name)

  clothing_items.each do |clothing_item_id|
    outfit.clothing_items << ClothingItem.friendly.find(clothing_item_id)
  end
end
