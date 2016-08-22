# frozen_string_literal: true
require_relative '../clothing_item_seeder'

class OuterwearSeeder < ClothingItemSeeder
  def seed!
    create_outerwear!(
      brand: 'Marmot',
      model: 'ROM Jacket',
      purchases: [
        {
          date: Date.parse('May 2014'),
          version: 'Green',
          purposes: %w(Essential Favorite Colorful),
        },
      ],
    )

    create_outerwear!(
      brand: 'Uniqlo',
      model: 'Extra Fine Merino V Neck Sweater',
      purchases: [
        {
          date: Date.parse('Sept 2014'),
          version: 'Wine',
        },
      ],
    )

    create_outerwear!(
      brand: 'Under Armour',
      model: 'Maryland Terrapins Full Zip Hoodie',
      purchases: [
        {
          date: Date.parse('Nov 2012'),
          version: 'Red',
          purposes: %w(Backup Colorful),
        },
      ],
    )

    create_outerwear!(
      brand: 'Uniqlo',
      model: 'Ultra Lite Down Vest',
      purchases: [
        {
          date: Date.parse('Jan 2015'),
          version: 'Navy',
          purposes: %w(Formal Essential),
        },
      ],
    )

    create_outerwear!(
      brand: 'Marmot',
      model: 'PreCip Jacket',
    )

    create_outerwear!(
      brand: 'Outdoor Research',
      model: 'Foray Jacket',
    )

    create_outerwear!(
      brand: 'Mountain Hardwear',
      model: 'Ghost Whisperer Down Jacket',
      purchases: [
        {
          date: Date.parse('Aug 2016'),
          version: 'Inca Gold',
          purposes: ['Cold Weather'],
        },
      ],
    )

    create_outerwear!(
      brand: "Arc'teryx",
      model: 'Beta LT Hybrid Jacket',
    )
  end

  def create_outerwear!(outerwear_params)
    create_clothing_item!(outerwear_params.merge(type: 'Outerwear'))
  end
end
