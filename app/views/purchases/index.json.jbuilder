json.cache!(@purchases) do
  json.array! @purchases do |purchase|
    json.call purchase, :id, :date, :usage, :version, :clothing_item_id
  end
end
