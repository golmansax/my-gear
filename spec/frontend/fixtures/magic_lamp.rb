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
          ),
          Purchase.new(
            date: Date.parse('2014-11-01'),
            version: 'Navy',
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
          ),
          Purchase.new(
            date: Date.parse('2014-11-01'),
            version: 'Green',
          ),
        ],
      ),
    ]
    render :index
  end
end

MagicLamp.define(controller: PurposesController) do
  fixture do
    purpose = Purpose.create!(name: 'Fabulous')

    Outerwear.create!(
      brand: 'Uniqlo',
      model: 'Down Jacket',
      purchases: [
        Purchase.new(
          date: Date.parse('2014-10-30'),
          version: 'Red',
        ),
        Purchase.new(
          date: Date.parse('2014-11-01'),
          version: 'Navy',
          purposes: [purpose],
        ),
      ],
    )

    @purposes = [purpose]

    render :index
  end
end
