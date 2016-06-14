require_relative '../clothing_item_seeder'

class TopSeeder < ClothingItemSeeder
  def seed!
    create_top!(
      brand: 'Icebreaker',
      model: 'Tech T Lite Short Sleeve',
      purchases: [
        {
          date: Date.parse('July 2014'),
          version: 'Fuse',
        },
        {
          date: Date.parse('July 2015'),
          version: 'Maroon',
          purposes: ['Essential', 'Colorful', 'Favorite', 'For Girlfriend'],
        },
      ],
    )

    create_top!(
      brand: 'Wool & Prince',
      model: 'Better Button Down',
      purchases: [
        {
          date: Date.parse('Oct 2014'),
          version: 'Blue Oxford',
          purposes: ['Backup', 'Formal', 'For Girlfriend'],
        },
        {
          date: Date.parse('Feb 2015'),
          version: 'Red Oxford',
          purposes: [
            'Favorite', 'Essential', 'Formal', 'For Girlfriend', 'Colorful'
          ],
        },
      ],
    )

    create_top!(
      brand: 'Warrior',
      model: 'Liverpool Kit',
      purchases: [
        {
          date: Date.parse('Dec 2012'),
          version: 'Home 2012/2013',
        },
        {
          date: Date.parse('May 2014'),
          version: 'Home 2013/2014',
          purposes: %w(Essential Expressive Colorful),
        },
      ],
    )

    create_top!(
      brand: 'Uniqlo',
      model: 'Novak Djokovic Polo',
      purchases: [
        {
          date: Date.parse('May 2013'),
          version: '2013 French Open',
        },
        {
          date: Date.parse('July 2014'),
          version: '2014 French Open',
        },
      ],
    )

    create_top!(
      brand: 'Lululemon',
      model: 'Freestyle Polo',
      purchases: [
        {
          date: Date.parse('Feb 2014'),
          version: 'Blue/Red',
        },
      ],
    )

    create_top!(
      brand: 'American Apparel',
      model: 'Tri-Blend T-shirt',
      purchases: [
        {
          date: Date.parse('Sept 2013'),
          version: 'Tri-Black – Thumbtack',
        },
        {
          date: Date.parse('Oct 2013'),
          version: 'Athletic Blue – Red Hot Chili Peppers – Scar Tissue',
        },
      ],
    )

    create_top!(
      brand: 'PrAna',
      model: 'T-shirt',
      purchases: [
        {
          date: Date.parse('Oct 2013'),
          version: 'Crops – Toffee',
        },
      ],
    )

    create_top!(
      brand: 'Uniqlo',
      model: 'Heattech V-Neck T-Shirt (Long Sleeve)',
      purchases: [
        {
          date: Date.parse('Jan 2015'),
          version: 'Black',
          purposes: ['Cold Weather'],
        },
      ],
    )

    create_top!(
      brand: 'Rasta Imposta',
      model: 'Lightweight Banana Costume',
      purchases: [
        {
          date: Date.parse('Nov 2013'),
          version: 'Yellow',
          purposes: %w(Expressive Colorful),
        },
      ],
    )

    create_top!(
      brand: 'Vulpine',
      model: "Men's Merino Henley",
    )

    create_top!(
      brand: 'Mizzen+Main',
      model: 'Button Down',
      purchases: [
        {
          date: Date.parse('Oct 2015'),
          version: 'Morgan – Green',
          purposes: ['Essential', 'Formal', 'For Girlfriend', 'Colorful'],
        },
      ],
    )

    create_top!(
      brand: 'Reebok',
      model: 'Spartan Race 2015 Sprint Finisher Shirt',
      purchases: [
        {
          date: Date.parse('Nov 2015'),
          version: 'Gray',
          purposes: ['Lounging', 'For Girlfriend'],
        },
      ],
    )

    create_top!(
      brand: 'Under Armour',
      model: "Men's Performance T-Shirt",
      purchases: [
        {
          date: Date.parse('Nov 2015'),
          version: 'Maryland Terrapins Gold Flag Banner',
          purposes: %w(Colorful Expressive Backup),
        },
      ],
    )

    create_top!(
      brand: 'Icebreaker',
      model: 'Cool-Lite Sphere Short Sleeve Henley',
    )

    create_top!(
      brand: 'Uniqlo',
      model: 'Men Packaged DRY Crewneck Short Sleeve T-Shirt',
      purchases: [
        {
          date: Date.parse('Mar 2016'),
          version: 'Orange',
          purposes: %w(Expressive Lounging),
        },
      ],
    )

    create_top!(
      brand: 'Kitsbow',
      model: 'Ride Tee-Tritone',
      purchases: [
        {
          date: Date.parse('Mar 2016'),
          version: 'Red Dust',
          purposes: %w(Colorful Essential Biking Favorite),
        },
      ],
    )

    create_top!(
      brand: 'Ibex',
      model: 'OD Henley T',
    )
  end

  def create_top!(top_params)
    create_clothing_item!(top_params.merge(type: 'Top'))
  end
end
