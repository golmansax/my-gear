json.cache!(@purchases) do
  json.array! @purchases do |purchase|
    json.call purchase, :id, :date, :usage, :version
    json.clothing_item_id purchase.clothing_item.slug
  end
end
