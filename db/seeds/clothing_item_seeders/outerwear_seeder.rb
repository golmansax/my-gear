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
          purposes: %w(Lounging Formal),
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
  end

  def create_outerwear!(outerwear_params)
    create_clothing_item!(outerwear_params.merge(type: 'Outerwear'))
  end
end
