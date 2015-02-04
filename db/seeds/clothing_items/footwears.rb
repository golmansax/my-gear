Footwear.create!(
  brand: 'Xero Shoes',
  model: 'DIY Sandal',
  purchases: [
    Purchase.new(
      date: Date.parse('July 2012'),
      version: 'Contact in Black/Neon Green',
      usage: 'not in use',
    ),
    Purchase.new(
      date: Date.parse('May 2013'),
      version: 'Connect in Brown/Purple',
      usage: 'not in use',
    ),
    Purchase.new(
      date: Date.parse('Dec 2013'),
      version: 'Connect in Brown/Neon Orange',
      usage: 'not in use',
    ),
    Purchase.new(
      date: Date.parse('Apr 2014'),
      version: 'Connect in Black/Light Purple',
      usage: 'heavy',
    ),
  ],
)

Footwear.create!(
  brand: 'Lems',
  model: 'Nine2five',
  purchases: [
    Purchase.new(
      date: Date.parse('June 2014'),
      version: 'Coffee & Cream',
      usage: 'moderate',
    ),
  ],
)

Footwear.create!(
  brand: 'New Balance',
  model: '696',
  purchases: [
    Purchase.new(
      date: Date.parse('Aug 2014'),
      version: 'Blue',
      usage: 'specialized',
    ),
  ],
)

Footwear.create!(
  brand: 'Five Ten',
  model: 'Team VXi',
  purchases: [
    Purchase.new(
      date: Date.parse('Dec 2013'),
      version: 'Green',
      usage: 'specialized',
    ),
  ],
)

Footwear.create!(
  brand: 'Vibram FiveFingers',
  model: 'KSO',
  purchases: [
    Purchase.new(
      date: Date.parse('July 2011'),
      version: 'Black',
      usage: 'specialized',
    ),
  ],
)

Footwear.create!(
  brand: 'Inov8',
  model: 'Bare-Grip 200',
  purchases: [
    Purchase.new(
      date: Date.parse('Nov 2013'),
      version: 'Green',
      usage: 'specialized',
    ),
  ],
)

Footwear.create!(
  brand: 'Timberland',
  model: 'Hiking Boot',
  purchases: [
    Purchase.new(
      date: Date.parse('June 2008'),
      version: 'Brown',
      usage: 'specialized',
    ),
  ],
)

Footwear.create!(
  brand: 'Nike',
  model: 'Hyperfuse Basketball Shoe',
  purchases: [
    Purchase.new(
      date: Date.parse('Feb 2012'),
      version: '2011 Black/Neon Green',
      usage: 'specialized',
    ),
  ],
)
