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
          usage: 'not in use',
        },
        {
          date: Date.parse('May 2014'),
          version: 'Charcoal',
          usage: 'specialized',
        },
      ],
      purposes: %w(Formal Essential),
    )

    create_sock!(
      brand: 'SmartWool',
      model: 'PhD Micro Toe Sock',
      purchases: [
        {
          date: Date.parse('July 2014'),
          version: 'Magenta',
          usage: 'not in use',
        },
        {
          date: Date.parse('Jan 2015'),
          version: 'Blue',
          usage: 'specialized',
        },
      ],
      purposes: %w(Formal Essential),
    )

    # Really thick socks
  end

  def create_sock!(sock_params)
    create_clothing_item!(sock_params.merge(type: 'Sock'))
  end
end