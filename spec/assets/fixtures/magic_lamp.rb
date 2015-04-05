MagicLamp.define(controller: ClothingItemsController) do
  fixture do
    @clothing_items = [
      Outerwear.create!(
        brand: 'Uniqlo',
        model: 'Down Jacket',
        purchases: [
          Purchase.new(
            date: Date.parse('2014-10-30'),
            version: 'Red',
            usage: 'not in use',
          ),
          Purchase.new(
            date: Date.parse('2014-11-01'),
            version: 'Navy',
            usage: 'backup',
          ),
        ],
      ),
      Outerwear.create!(
        brand: 'Marmot',
        model: 'ROM Jacket',
        purchases: [
          Purchase.new(
            date: Date.parse('2014-10-30'),
            version: 'Gray',
            usage: 'not in use',
          ),
          Purchase.new(
            date: Date.parse('2014-11-01'),
            version: 'Green',
            usage: 'everyday',
          ),
        ],
      ),
    ]
    render :index
  end
end

MagicLamp.define(controller: OutfitsController) do
  fixture do
    outfit = Outfit.create!(name: 'Fabulous')

    Outerwear.create!(
      brand: 'Uniqlo',
      model: 'Down Jacket',
      outfits: [outfit],
      purchases: [
        Purchase.new(
          date: Date.parse('2014-10-30'),
          version: 'Red',
          usage: 'not in use',
        ),
        Purchase.new(
          date: Date.parse('2014-11-01'),
          version: 'Navy',
          usage: 'backup',
        ),
      ],
    )

    @outfits = [outfit]

    render :index
  end
end
