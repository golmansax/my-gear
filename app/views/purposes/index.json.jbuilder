json.array! @purposes do |purpose|
  json.call purpose, :name
  json.id purpose.slug
  json.clothing_item_ids purpose.clothing_items.map(&:slug)
end
