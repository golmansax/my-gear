Top.create!(
  brand: 'Icebreaker',
  model: 'Tech T Lite Short Sleeve',
  purchases: [
    Purchase.new(
      date: Date.parse('July 2014'),
      version: 'Yellow',
      usage: 'everyday',
    ),
  ],
)

Top.create!(
  brand: 'Wool & Prince',
  model: 'Better Button Down',
  purchases: [
    Purchase.new(
      date: Date.parse('Oct 2014'),
      version: 'Blue Oxford',
      usage: 'everyday',
    ),
    Purchase.new(
      date: Date.parse('Feb 2015'),
      version: 'Red Oxford',
      usage: 'everyday',
    ),
  ],
)

Top.create!(
  brand: 'Warrior',
  model: 'Liverpool Kit',
  purchases: [
    Purchase.new(
      date: Date.parse('Dec 2012'),
      version: 'Home 2012/2013',
      usage: 'not in use',
    ),
    Purchase.new(
      date: Date.parse('May 2014'),
      version: 'Home 2013/2014',
      usage: 'everyday',
    ),
  ],
)

Top.create!(
  brand: 'Uniqlo',
  model: 'Novak Djokovic Polo',
  purchases: [
    Purchase.new(
      date: Date.parse('May 2013'),
      version: '2013 French Open',
      usage: 'not in use',
    ),
    Purchase.new(
      date: Date.parse('July 2014'),
      version: '2014 French Open',
      usage: 'everyday',
    ),
  ],
)

Top.create!(
  brand: 'Lululemon',
  model: 'Freestyle Polo',
  purchases: [
    Purchase.new(
      date: Date.parse('Feb 2014'),
      version: 'Blue/Red',
      usage: 'not in use',
    ),
  ],
)

Top.create!(
  brand: 'American Apparel',
  model: 'Tri-Blend T-shirt',
  purchases: [
    Purchase.new(
      date: Date.parse('Sept 2013'),
      version: 'Tri-Black – Thumbtack',
      usage: 'specialized',
    ),
    Purchase.new(
      date: Date.parse('Oct 2013'),
      version: 'Athletic Blue – Red Hot Chili Peppers – Scar Tissue',
      usage: 'specialized',
    ),
  ],
)

Top.create!(
  brand: 'Uniqlo',
  model: 'Heattech V-Neck T-Shirt (Long Sleeve)',
  purchases: [
    Purchase.new(
      date: Date.parse('Jan 2015'),
      version: 'Black',
      usage: 'specialized',
    ),
  ],
)
