MagicLamp.fixture(controller: ClothingItemsController) do
  @clothing_item = Outerwear.create!(
    brand: 'Uniqlo',
    model: 'Down Jacket',
    first_purchase_date: Date.parse('2014-10-30'),
    recent_purchase_date: Date.parse('2014-11-01'),
  )
  render :show
end

MagicLamp.fixture(controller: OutfitsController) do
  @outfit = Outfit.create!(name: 'Fabulous')
  render :show
end
