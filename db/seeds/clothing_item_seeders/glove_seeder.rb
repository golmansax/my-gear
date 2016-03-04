require_relative '../clothing_item_seeder'

class GloveSeeder < ClothingItemSeeder
  def seed!
    create_glove!(
      brand: 'Icebreaker',
      model: 'Apex Glove Liner',
      purchases: [
        {
          date: Date.parse('May 2015'),
          version: 'Black',
        },
      ],
    )

    create_glove!(
      brand: 'Giro',
      model: 'Knit Merino Wool Glove',
      purchases: [
        {
          date: Date.parse('Mar 2016'),
          version: 'Gray / Black',
          purposes: ['Cold Weather'],
        },
      ],
    )
  end

  def create_glove!(glove_params)
    create_clothing_item!(glove_params.merge(type: 'Glove'))
  end
end
