json.cache!(outfit) do
  json.call outfit, :name
  json.id outfit.slug
end
