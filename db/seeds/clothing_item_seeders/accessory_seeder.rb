# frozen_string_literal: true
require_relative '../clothing_item_seeder'

class AccessorySeeder < ClothingItemSeeder
  def seed!
    create_accessory!(
      brand: 'Icebreaker',
      model: 'Apex Glove Liner',
      purchases: [
        {
          date: Date.parse('May 2015'),
          version: 'Black',
          purposes: ['Cold Weather'],
        },
      ],
    )

    create_accessory!(
      brand: 'Giro',
      model: 'Knit Merino Wool Glove',
      purchases: [
        {
          date: Date.parse('Mar 2016'),
          version: 'Gray / Black',
        },
      ],
    )

    create_accessory!(
      brand: '180s',
      model: 'Exolite Ear Warmer',
      purchases: [
        {
          date: Date.parse('Dec 2009'),
          version: 'Black',
          purposes: ['Cold Weather'],
        },
      ],
    )

    create_accessory!(
      brand: 'Dockers',
      model: "Men's 35mm Stretch Fabric Braided Belt",
      purchases: [
        {
          date: Date.parse('Jan 2017'),
          version: 'Black',
          purposes: ['Formal'],
        },
      ],
    )
  end

  def create_accessory!(accessory_params)
    create_clothing_item!(accessory_params.merge(type: 'Accessory'))
  end
end
