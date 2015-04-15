json.array! @purchases do |purchase|
  json.call purchase, :id, :date, :version
  json.clothing_item_id purchase.clothing_item.slug
  json.purpose_ids purchase.purposes.map(&:slug)
end
