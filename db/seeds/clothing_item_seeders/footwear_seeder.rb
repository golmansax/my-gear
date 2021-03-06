# frozen_string_literal: true
require_relative '../clothing_item_seeder'

class FootwearSeeder < ClothingItemSeeder
  def seed!
    create_footwear!(
      brand: 'Xero Shoes',
      model: 'DIY Sandal',
      purchases: [
        {
          date: Date.parse('July 2012'),
          version: 'Contact in Black/Hot Lime',
        },
        {
          date: Date.parse('May 2013'),
          version: 'Connect in Brown/Purple',
        },
        {
          date: Date.parse('Dec 2013'),
          version: 'Connect in Brown/Hot Orange',
        },
        {
          date: Date.parse('June 2014'),
          version: 'Connect in Black/Light Purple',
        },
        {
          date: Date.parse('Apr 2015'),
          version: 'Connect in Black/Hot Pink',
        },
        {
          date: Date.parse('June 2016'),
          version: 'Contact in Black/Hot Lemon Lime',
          purposes: %w(Expressive Essential Favorite Colorful),
        },
      ],
    )

    create_footwear!(
      brand: 'Lems',
      model: 'Nine2five',
      purchases: [
        {
          date: Date.parse('June 2014'),
          version: 'Coffee & Cream',
          purposes: ['Favorite', 'Essential', 'Formal', 'For Girlfriend'],
        },
      ],
    )

    create_footwear!(
      brand: 'New Balance',
      model: '696 – Tennis',
      purchases: [
        {
          date: Date.parse('Aug 2014'),
          version: 'Blue',
        },
      ],
    )

    create_footwear!(
      brand: 'Five Ten',
      model: 'Team VXi',
      purchases: [
        {
          date: Date.parse('Dec 2013'),
          version: 'Green',
        },
      ],
    )

    create_footwear!(
      brand: 'Vibram FiveFingers',
      model: 'KSO',
      purchases: [
        {
          date: Date.parse('July 2011'),
          version: 'Black',
          purposes: %w(Backup),
        },
      ],
    )

    create_footwear!(
      brand: 'Inov8',
      model: 'Bare-Grip 200',
      purchases: [
        {
          date: Date.parse('Nov 2013'),
          version: 'Green',
          purposes: %w(Frisbee Colorful),
        },
      ],
    )

    create_footwear!(
      brand: 'Timberland',
      model: 'Hiking Boot',
      purchases: [
        {
          date: Date.parse('June 2008'),
          version: 'Brown',
        },
      ],
    )

    create_footwear!(
      brand: 'Nike',
      model: 'Hyperfuse Basketball Shoe',
      purchases: [
        {
          date: Date.parse('Feb 2012'),
          version: '2011 Black/Neon Green',
        },
      ],
    )

    create_footwear!(
      brand: 'NEOS Overshoe',
      model: 'Adventurer',
    )

    create_footwear!(
      brand: 'Western Mountaineering',
      model: 'Flash Bootie',
    )

    create_footwear!(
      brand: 'Vivobarefoot',
      model: 'Motus',
      purchases: [
        {
          date: Date.parse('Aug 2016'),
          version: 'Black/Red',
          purposes: %w(Basketball Tennis),
        },
      ],
    )

    create_footwear!(
      brand: 'Scarpa',
      model: 'Furia',
    )

    create_footwear!(
      brand: 'Mad Rock',
      model: "Men's Flash Climbing Shoe",
      purchases: [
        {
          date: Date.parse('June 2016'),
          version: 'Pumpkin',
          purposes: %w(Climbing Colorful),
        },
      ],
    )

    create_footwear!(
      brand: 'Lems',
      model: 'Boulder Boot',
      purchases: [
        {
          date: Date.parse('May 2016'),
          version: 'Navy',
          purposes: ['Hiking', 'Cold Weather', 'Rain'],
        },
      ],
    )
  end

  def create_footwear!(footwear_params)
    create_clothing_item!(footwear_params.merge(type: 'Footwear'))
  end
end
