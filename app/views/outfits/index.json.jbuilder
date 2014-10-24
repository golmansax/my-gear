json.array! @outfits do |outfit|
  json.call outfit, :name
  json.id outfit.slug
end
