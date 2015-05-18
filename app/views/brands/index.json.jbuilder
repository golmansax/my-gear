json.array! @brands do |brand|
  json.call brand, :name
  json.id brand.slug
  json.purchase_ids brand.purchases.map(&:id)
end
