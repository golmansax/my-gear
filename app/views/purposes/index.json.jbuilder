json.array! @purposes do |purpose|
  json.call purpose, :name
  json.id purpose.slug
  json.purchase_ids purpose.purchases.map(&:id)
end
