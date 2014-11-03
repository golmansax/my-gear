json.cache!(@outfits) do
  json.array! @outfits, partial: 'outfit', as: :outfit
end
