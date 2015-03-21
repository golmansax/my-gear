json.cache!(@purchases) do
  json.array! @purchases, partial: 'purchase', as: :purchase
end
