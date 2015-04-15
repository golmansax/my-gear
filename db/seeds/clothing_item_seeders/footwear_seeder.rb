require_relative '../clothing_item_seeder'

class FootwearSeeder < ClothingItemSeeder
  def seed!
    create_footwear!(
      brand: 'Xero Shoes',
      model: 'DIY Sandal',
      purchases: [
        {
          date: Date.parse('July 2012'),
          version: 'Contact in Black/Hot Lime',
        },
        {
          date: Date.parse('May 2013'),
          version: 'Connect in Brown/Purple',
        },
        {
          date: Date.parse('Dec 2013'),
          version: 'Connect in Brown/Hot Orange',
        },
        {
          date: Date.parse('June 2014'),
          version: 'Connect in Black/Light Purple',
        },
        {
          date: Date.parse('Apr 2015'),
          version: 'Connect in Black/Hot Pink',
          purposes: %w(Expressive Essential Favorite),
        },
      ],
    )

    create_footwear!(
      brand: 'Lems',
      model: 'Nine2five',
      purchases: [
        {
          date: Date.parse('June 2014'),
          version: 'Coffee & Cream',
          purposes: ['Formal', 'For Girlfriend'],
        },
      ],
    )

    create_footwear!(
      brand: 'New Balance',
      model: '696 – Tennis',
      purchases: [
        {
          date: Date.parse('Aug 2014'),
          version: 'Blue',
          purposes: %w(Tennis),
        },
      ],
    )

    create_footwear!(
      brand: 'Five Ten',
      model: 'Team VXi',
      purchases: [
        {
          date: Date.parse('Dec 2013'),
          version: 'Green',
          purposes: %w(Climbing),
        },
      ],
    )

    create_footwear!(
      brand: 'Vibram FiveFingers',
      model: 'KSO',
      purchases: [
        {
          date: Date.parse('July 2011'),
          version: 'Black',
          purposes: %w(Backup),
        },
      ],
    )

    create_footwear!(
      brand: 'Inov8',
      model: 'Bare-Grip 200',
      purchases: [
        {
          date: Date.parse('Nov 2013'),
          version: 'Green',
          purposes: %w(Hiking Frisbee),
        },
      ],
    )

    create_footwear!(
      brand: 'Timberland',
      model: 'Hiking Boot',
      purchases: [
        {
          date: Date.parse('June 2008'),
          version: 'Brown',
          purposes: ['Hiking', 'Cold Weather'],
        },
      ],
    )

    create_footwear!(
      brand: 'Nike',
      model: 'Hyperfuse Basketball Shoe',
      purchases: [
        {
          date: Date.parse('Feb 2012'),
          version: '2011 Black/Neon Green',
          purposes: ['Basketball'],
        },
      ],
    )
  end

  def create_footwear!(footwear_params)
    create_clothing_item!(footwear_params.merge(type: 'Footwear'))
  end
end
