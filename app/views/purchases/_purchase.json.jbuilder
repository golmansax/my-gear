json.cache!(purchase) do
  json.call purchase, :id, :date, :usage, :version, :clothing_item_id
end
