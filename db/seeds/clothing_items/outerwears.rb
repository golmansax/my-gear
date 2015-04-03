Outerwear.create!(
  brand: 'Marmot',
  model: 'ROM Jacket',
  purchases: [
    Purchase.new(
      date: Date.parse('May 2014'),
      version: 'Green',
      usage: 'everyday',
    ),
  ],
)

Outerwear.create!(
  brand: 'Uniqlo',
  model: 'Extra Fine Merino V Neck Sweater',
  purchases: [
    Purchase.new(
      date: Date.parse('Sept 2014'),
      version: 'Wine',
      usage: 'specialized',
    ),
  ],
)

Outerwear.create!(
  brand: 'Under Armour',
  model: 'Maryland Terrapins Full Zip Hoodie',
  purchases: [
    Purchase.new(
      date: Date.parse('Nov 2012'),
      version: 'Red',
      usage: 'backup',
    ),
  ],
)

Outerwear.create!(
  brand: 'Uniqlo',
  model: 'Ultra Lite Down Vest',
  purchases: [
    Purchase.new(
      date: Date.parse('Jan 2015'),
      version: 'Navy',
      usage: 'specialized',
    ),
  ],
)
