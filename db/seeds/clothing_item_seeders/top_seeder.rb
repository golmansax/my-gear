require_relative '../clothing_item_seeder'

class TopSeeder < ClothingItemSeeder
  def seed!
    create_top!(
      brand: 'Icebreaker',
      model: 'Tech T Lite Short Sleeve',
      purchases: [
        {
          date: Date.parse('July 2014'),
          version: 'Yellow',
          usage: 'everyday',
        },
      ],
      purposes: ['Essential'],
    )

    create_top!(
      brand: 'Wool & Prince',
      model: 'Better Button Down',
      purchases: [
        {
          date: Date.parse('Oct 2014'),
          version: 'Blue Oxford',
          usage: 'everyday',
        },
        {
          date: Date.parse('Feb 2015'),
          version: 'Red Oxford',
          usage: 'everyday',
        },
      ],
      purposes: ['Favorite', 'Essential', 'Formal', 'For Girlfriend'],
    )

    create_top!(
      brand: 'Warrior',
      model: 'Liverpool Kit',
      purchases: [
        {
          date: Date.parse('Dec 2012'),
          version: 'Home 2012/2013',
          usage: 'not in use',
        },
        {
          date: Date.parse('May 2014'),
          version: 'Home 2013/2014',
          usage: 'everyday',
        },
      ],
      purposes: %w(Essential Expressive),
    )

    create_top!(
      brand: 'Uniqlo',
      model: 'Novak Djokovic Polo',
      purchases: [
        {
          date: Date.parse('May 2013'),
          version: '2013 French Open',
          usage: 'not in use',
        },
        {
          date: Date.parse('July 2014'),
          version: '2014 French Open',
          usage: 'everyday',
        },
      ],
      purposes: %w(Essential Expressive),
    )

    create_top!(
      brand: 'Lululemon',
      model: 'Freestyle Polo',
      purchases: [
        {
          date: Date.parse('Feb 2014'),
          version: 'Blue/Red',
          usage: 'not in use',
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
          usage: 'specialized',
        },
        {
          date: Date.parse('Oct 2013'),
          version: 'Athletic Blue – Red Hot Chili Peppers – Scar Tissue',
          usage: 'specialized',
        },
      ],
      purposes: ['Lounging', 'For Girlfriend', 'Expressive'],
    )

    create_top!(
      brand: 'Uniqlo',
      model: 'Heattech V-Neck T-Shirt (Long Sleeve)',
      purchases: [
        {
          date: Date.parse('Jan 2015'),
          version: 'Black',
          usage: 'specialized',
        },
      ],
      purposes: ['Cold Weather'],
    )

    create_top!(
      brand: 'Rasta Imposta',
      model: 'Lightweight Banana Costume',
      purchases: [
        {
          date: Date.parse('Jan 2015'),
          version: 'Yellow',
          usage: 'specialized',
        },
      ],
      purposes: ['Expressive'],
    )
  end

  def create_top!(top_params)
    create_clothing_item!(top_params.merge(type: 'Top'))
  end
end
