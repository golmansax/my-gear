def create_clothing_item!(purposes: [], purchases:, **clothing_item_params)
  clothing_item = ClothingItem.new(clothing_item_params.merge(type: 'Bottom'))

  purposes.each do |purpose_name|
    purpose = Purpose.find_by(name: purpose_name)
    purpose ||= Purpose.new(name: purpose_name)

    clothing_item.purposes << purpose
  end

  purchases.each do |purchase_params|
    clothing_item.purchases << Purchase.new(purchase_params)
  end

  clothing_item.save!
end

create_clothing_item!(
  brand: 'prAna',
  model: 'Stretch Zion Pant',
  purchases: [
    {
      date: Date.parse('April 2013'),
      version: 'Khaki',
      usage: 'not in use',
    },
    {
      date: Date.parse('June 2014'),
      version: 'Brown',
      usage: 'everyday',
    },
  ],
  purposes: ['Essential'],
)

create_clothing_item!(
  brand: 'Outlier',
  model: 'New Way Short',
  purchases: [
    {
      date: Date.parse('April 2015'),
      version: 'Deep Gray',
      usage: 'everyday',
    },
  ],
  purposes: ['Essential'],
)

create_clothing_item!(
  brand: 'prAna',
  model: 'Stretch Zion Short',
  purchases: [
    {
      date: Date.parse('April 2014'),
      version: 'Charcoal',
      usage: 'backup',
    },
  ],
  purposes: ['Backup'],
)

create_clothing_item!(
  brand: 'Stonemaster',
  model: 'Pant',
  purchases: [
    {
      date: Date.parse('May 2014'),
      version: 'Black Slim',
      usage: 'specialized',
    },
  ],
  purposes: ['For Girlfriend', 'Formal'],
)

create_clothing_item!(
  brand: 'O\'Neill',
  model: 'Hybrid Freak Short',
  purchases: [
    {
      date: Date.parse('Jan 2014'),
      version: 'Navy Plaid',
      usage: 'not in use',
    },
  ],
  purposes: ['Swimming'],
)

create_clothing_item!(
  brand: 'Nike',
  model: 'Jordan Aero Fly Mania Basketball Short',
  purchases: [
    {
      date: Date.parse('April 2013'),
      version: 'Green',
      usage: 'specialized',
    },
  ],
  purposes: ['Lounging'],
)

create_clothing_item!(
  brand: 'White Sierra',
  model: 'Baz Az Fleece Pant',
  purchases: [
    {
      date: Date.parse('Dec 2013'),
      version: 'Black',
      usage: 'not in use',
    },
  ],
)

create_clothing_item!(
  brand: 'REI',
  model: 'Sariska Yoga Pant',
  purchases: [
    {
      date: Date.parse('April 2015'),
      version: 'Slate',
      usage: 'specialized',
    },
  ],
  purposes: ['Lounging'],
)

# Ski Pants
