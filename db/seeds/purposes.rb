purposes = {
  'Cold Weather' => [
    'uniqlo-ultra-lite-down-vest',
    'uniqlo-extra-fine-merino-v-neck-sweater',
    'uniqlo-heattech-v-neck-t-shirt-long-sleeve',
    # long socks
  ],
  'Expressive' => [
    'american-apparel-tri-blend-t-shirt',
    'warrior-liverpool-kit',
    'uniqlo-novak-djokovic-polo',
  ],
  'Favorite' => [
    'marmot-rom-jacket',
    'icebreaker-tech-t-lite-short-sleeve',
  ],
  'For Girlfriend' => [
    'wool-prince-better-button-down',
    'american-apparel-tri-blend-t-shirt',
  ],
  'Formal' => [
    'wool-prince-better-button-down',
    'uniqlo-ultra-lite-down-vest',
    'uniqlo-extra-fine-merino-v-neck-sweater',
    'injinji-run-2-0-lightweight-no-show-nuwool',
  ],
  'Lounging' => [
    'american-apparel-tri-blend-t-shirt',
    'uniqlo-extra-fine-merino-v-neck-sweater',
  ],
}

purposes.each do |purpose_name, clothing_items|
  purpose = Purpose.create!(name: purpose_name)

  clothing_items.each do |clothing_item_id|
    purpose.clothing_items << ClothingItem.friendly.find(clothing_item_id)
  end
end
