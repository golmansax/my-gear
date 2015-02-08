json.purchase do
  json.partial! 'purchases/purchase', purchase: @purchase
end
