MagicLamp.define(controller: ClothingItemsController) do
  fixture do
    @clothing_item = Outerwear.create!(
      brand: 'Uniqlo',
      model: 'Down Jacket',
      first_purchase_date: Date.parse('2014-10-30'),
      recent_purchase_date: Date.parse('2014-11-01'),
    )
    render :show
  end

  fixture do
    @clothing_items = [
      Outerwear.create!(
        brand: 'Uniqlo',
        model: 'Down Jacket',
        first_purchase_date: Date.parse('2014-10-30'),
        recent_purchase_date: Date.parse('2014-11-01'),
      ),
      Outerwear.create!(
        brand: 'Marmot',
        model: 'ROM Jacket',
        first_purchase_date: Date.parse('2014-10-30'),
        recent_purchase_date: Date.parse('2014-11-01'),
      ),
    ]
    render :index
  end
end

MagicLamp.define(controller: OutfitsController) do
  fixture do
    @outfit = Outfit.create!(name: 'Fabulous')

    Outerwear.create!(
      brand: 'Uniqlo',
      model: 'Down Jacket',
      first_purchase_date: Date.parse('2014-10-30'),
      recent_purchase_date: Date.parse('2014-11-01'),
      outfits: [@outfit],
    )

    render :show
  end
end
