# frozen_string_literal: true
require_relative '../clothing_item_seeder'

class UnderwearSeeder < ClothingItemSeeder
  def seed!
    create_underwear!(
      brand: 'Uniqlo',
      model: 'AIRism Boxer Brief',
      purchases: [
        {
          date: Date.parse('Sept 2014'),
          version: 'Gray',
          purposes: ['Backup'],
        },
      ],
    )

    create_underwear!(
      brand: 'Five Bamboo',
      model: 'Bamboxer Brief',
      purchases: [
        {
          date: Date.parse('Dec 2014'),
          version: 'Purple',
        },
      ],
    )

    create_underwear!(
      brand: 'Cariloha',
      model: 'Bamboo Boxer Brief',
      purchases: [
        {
          date: Date.parse('Aug 2014'),
          version: 'Black',
        },
      ],
    )

    create_underwear!(
      brand: 'ExOfficio',
      model: 'Give-N-Go Printed Boxer Brief',
      purchases: [
        {
          date: Date.parse('Jul 2015'),
          version: 'Map/Light Lapis',
          purposes: %w(Essential Colorful),
        },
      ],
    )

    create_underwear!(
      brand: 'ExOfficio',
      model: 'Give-N-Go Sport Brief',
      purchases: [
        {
          date: Date.parse('Sept 2014'),
          version: 'Black/Orange',
          purposes: %w(Essential Colorful),
        },
      ],
    )

    create_underwear!(
      brand: 'Uniqlo',
      model: 'Heattech Long John',
      purchases: [
        {
          date: Date.parse('Nov 2013'),
          version: 'Navy',
          purposes: ['Cold Weather'],
        },
      ],
    )

    create_underwear!(
      brand: 'Novara',
      model: 'Padded Bike Boxers',
      purchases: [
        {
          date: Date.parse('Mar 2015'),
          version: 'Black',
          purposes: ['Biking'],
        },
      ],
    )

    create_underwear!(
      brand: 'SmartWool',
      model: 'NTS Micro 150 Pattern Boxer Brief',
      purchases: [
        {
          date: Date.parse('April 2015'),
          version: 'Taupe',
        },
        {
          date: Date.parse('Oct 2015'),
          version: 'Green',
          purposes: %w(Essential Favorite Colorful),
        },
      ],
    )

    create_underwear!(
      brand: 'SmartWool',
      model: 'Microweight Boxer Brief',
      purchases: [
        {
          date: Date.parse('June 2015'),
          version: 'Alloy',
          purposes: %w(Essential),
        },
      ],
    )

    create_underwear!(
      brand: 'WoolX',
      model: 'The Daily – Merino Wool Boxer Brief',
      purchases: [
        {
          date: Date.parse('Jan 2016'),
          version: 'Cobalt Blue',
          purposes: %w(Essential Colorful Favorite),
        },
        {
          date: Date.parse('June 2016'),
          version: 'Grapevine Stripe',
          purposes: %w(Essential Favorite Colorful),
        },
      ],
    )

    create_underwear!(
      brand: 'Smartwool',
      model: "Men's Microweight Long Underwear Bottom",
      purchases: [
        {
          date: Date.parse('June 2016'),
          version: 'Black',
          purposes: ['Cold Weather'],
        },
      ],
    )
  end

  def create_underwear!(underwear_params)
    create_clothing_item!(underwear_params.merge(type: 'Underwear'))
  end
end
