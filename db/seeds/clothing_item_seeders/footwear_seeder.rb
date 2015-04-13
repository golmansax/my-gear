require_relative '../clothing_item_seeder'

class BottomSeeder < ClothingItemSeeder
  def seed!
    create_footwewar!(
      brand: 'Xero Shoes',
      model: 'DIY Sandal',
      purchases: [
        Purchase.new(
          date: Date.parse('July 2012'),
          version: 'Contact in Black/Hot Lime',
          usage: 'not in use',
        ),
        Purchase.new(
          date: Date.parse('May 2013'),
          version: 'Connect in Brown/Purple',
          usage: 'not in use',
        ),
        Purchase.new(
          date: Date.parse('Dec 2013'),
          version: 'Connect in Brown/Hot Orange',
          usage: 'not in use',
        ),
        Purchase.new(
          date: Date.parse('June 2014'),
          version: 'Connect in Black/Light Purple',
          usage: 'not in use',
        ),
        Purchase.new(
          date: Date.parse('Apr 2015'),
          version: 'Connect in Black/Hot Pink',
          usage: 'everyday',
        ),
      ],
      purposes: %w(Expressive Essential Favorite),
    )

    create_footwewar!(
      brand: 'Lems',
      model: 'Nine2five',
      purchases: [
        Purchase.new(
          date: Date.parse('June 2014'),
          version: 'Coffee & Cream',
          usage: 'specialized',
        ),
      ],
      purposes: ['Formal', 'For Girlfriend'],
    )

    create_footwewar!(
      brand: 'New Balance',
      model: '696 – Tennis',
      purchases: [
        Purchase.new(
          date: Date.parse('Aug 2014'),
          version: 'Blue',
          usage: 'specialized',
        ),
      ],
      purposes: %w(Tennis),
    )

    create_footwewar!(
      brand: 'Five Ten',
      model: 'Team VXi',
      purchases: [
        Purchase.new(
          date: Date.parse('Dec 2013'),
          version: 'Green',
          usage: 'specialized',
        ),
      ],
      purposes: %w(Climbing),
    )

    create_footwewar!(
      brand: 'Vibram FiveFingers',
      model: 'KSO',
      purchases: [
        Purchase.new(
          date: Date.parse('July 2011'),
          version: 'Black',
          usage: 'backup',
        ),
      ],
      purposes: %w(Backup),
    )

    create_footwewar!(
      brand: 'Inov8',
      model: 'Bare-Grip 200',
      purchases: [
        Purchase.new(
          date: Date.parse('Nov 2013'),
          version: 'Green',
          usage: 'specialized',
        ),
      ],
      purposes: %w(Hiking Frisbee),
    )

    create_footwewar!(
      brand: 'Timberland',
      model: 'Hiking Boot',
      purchases: [
        Purchase.new(
          date: Date.parse('June 2008'),
          version: 'Brown',
          usage: 'specialized',
        ),
      ],
      purposes: ['Hiking', 'Cold Weather'],
    )

    create_footwewar!(
      brand: 'Nike',
      model: 'Hyperfuse Basketball Shoe',
      purchases: [
        Purchase.new(
          date: Date.parse('Feb 2012'),
          version: '2011 Black/Neon Green',
          usage: 'specialized',
        ),
      ],
      purposes: ['Basketball'],
    )
  end

  def create_footwear!(footwear_params)
    create_clothing_item!(footwear_params.merge(type: 'Footwear'))
  end
end
