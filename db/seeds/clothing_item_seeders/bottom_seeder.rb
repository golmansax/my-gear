require_relative '../clothing_item_seeder'

class BottomSeeder < ClothingItemSeeder
  def seed!
    create_bottom!(
      brand: 'prAna',
      model: 'Stretch Zion Pant',
      purchases: [
        {
          date: Date.parse('April 2013'),
          version: 'Khaki',
        },
        {
          date: Date.parse('June 2014'),
          version: 'Brown',
          purposes: ['Essential'],
        },
      ],
    )

    create_bottom!(
      brand: 'Outlier',
      model: 'New Way Short',
      purchases: [
        {
          date: Date.parse('April 2015'),
          version: 'Deep Gray',
          purposes: ['Essential'],
        },
      ],
    )

    create_bottom!(
      brand: 'prAna',
      model: 'Stretch Zion Short',
      purchases: [
        {
          date: Date.parse('April 2014'),
          version: 'Charcoal',
          purposes: ['Backup'],
        },
      ],
    )

    create_bottom!(
      brand: 'Stonemaster',
      model: 'Pant',
      purchases: [
        {
          date: Date.parse('May 2014'),
          version: 'Black Slim',
          purposes: ['For Girlfriend', 'Formal'],
        },
      ],
    )

    create_bottom!(
      brand: 'O\'Neill',
      model: 'Hybrid Freak Short',
      purchases: [
        {
          date: Date.parse('Jan 2014'),
          version: 'Navy Plaid',
          purposes: ['Swimming'],
        },
      ],
    )

    create_bottom!(
      brand: 'Nike',
      model: 'Jordan Aero Fly Mania Basketball Short',
      purchases: [
        {
          date: Date.parse('April 2013'),
          version: 'Green',
          purposes: ['Lounging'],
        },
      ],
    )

    create_bottom!(
      brand: 'White Sierra',
      model: 'Baz Az Fleece Pant',
      purchases: [
        {
          date: Date.parse('Dec 2013'),
          version: 'Black',
        },
      ],
    )

    create_bottom!(
      brand: 'REI',
      model: 'Sariska Yoga Pant',
      purchases: [
        {
          date: Date.parse('April 2015'),
          version: 'Slate',
          purposes: ['Lounging'],
        },
      ],
    )

    # Ski Pants
  end

  def create_bottom!(bottom_params)
    create_clothing_item!(bottom_params.merge(type: 'Bottom'))
  end
end
