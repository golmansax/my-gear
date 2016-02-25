require_relative '../clothing_item_seeder'

class SockSeeder < ClothingItemSeeder
  def seed!
    create_sock!(
      brand: 'Injinji',
      model: 'RUN 2.0 Lightweight No-Show NuWool',
      purchases: [
        {
          date: Date.parse('Apr 2014'),
          version: 'Olive',
        },
        {
          date: Date.parse('May 2014'),
          version: 'Charcoal',
        },
      ],
    )

    create_sock!(
      brand: 'SmartWool',
      model: 'PhD Micro Toe Sock',
      purchases: [
        {
          date: Date.parse('July 2014'),
          version: 'Magenta',
        },
        {
          date: Date.parse('Jan 2015'),
          version: 'Blue',
        },
      ],
    )

    create_sock!(
      brand: 'Injinji',
      model: 'Outdoor 2.0 Original Weight NuWool Crew',
      purchases: [
        {
          date: Date.parse('Aug 2015'),
          version: 'Charcoal',
          purposes: ['Cold Weather'],
        },
      ],
    )

    create_sock!(
      brand: 'Injinji',
      model: 'Outdoor 2.0 Original Weight Micro Mini-Crew',
      purchases: [
        {
          date: Date.parse('Oct 2015'),
          version: 'Canyon Pink/Gray',
          purposes: %w(Tennis Colorful Favorite Essential),
        },
      ],
    )

    create_sock!(
      brand: 'Injinji',
      model: 'Outdoor 2.0 Midweight NuWool Mini-Crew',
      purchases: [
        {
          date: Date.parse('Dec 2015'),
          version: 'Indigo',
          purposes: %w(Tennis Colorful),
        },
      ],
    )
  end

  def create_sock!(sock_params)
    create_clothing_item!(sock_params.merge(type: 'Sock'))
  end
end
