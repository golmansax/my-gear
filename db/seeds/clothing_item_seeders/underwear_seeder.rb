require_relative '../clothing_item_seeder'

class BottomSeeder < ClothingItemSeeder
  def seed!
    create_underwear!(
      brand: 'Uniqlo',
      model: 'AIRism Boxer Brief',
      purchases: [
        Purchase.new(
          date: Date.parse('Sept 2014'),
          version: 'Gray',
          usage: 'everyday',
        ),
      ],
      purposes: ['Backup'],
    )

    create_underwear!(
      brand: 'Five Bamboo',
      model: 'Bamboxer Brief',
      purchases: [
        Purchase.new(
          date: Date.parse('Dec 2014'),
          version: 'Purple',
          usage: 'everyday',
        ),
      ],
      purposes: ['Essential'],
    )

    create_underwear!(
      brand: 'Cariloha',
      model: 'Bamboo Boxer Brief',
      purchases: [
        Purchase.new(
          date: Date.parse('Aug 2014'),
          version: 'Black',
          usage: 'everyday',
        ),
      ],
      purposes: ['Essential'],
    )

    create_underwear!(
      brand: 'ExOfficio',
      model: 'Give-N-Go Sport Brief',
      purchases: [
        Purchase.new(
          date: Date.parse('Sept 2014'),
          version: 'Black/Orange',
          usage: 'everyday',
        ),
      ],
      purposes: ['Essential'],
    )

    create_underwear!(
      brand: 'Uniqlo',
      model: 'Heattech Long John',
      purchases: [
        Purchase.new(
          date: Date.parse('Nov 2013'),
          version: 'Navy',
          usage: 'specialized',
        ),
      ],
      purposes: ['Cold Weather'],
    )

    create_underwear!(
      brand: 'Novara',
      model: 'Padded Bike Boxers',
      purchases: [
        Purchase.new(
          date: Date.parse('Mar 2015'),
          version: 'Black',
          usage: 'specialized',
        ),
      ],
      purposes: ['Biking'],
    )

    create_underwear!(
      brand: 'SmartWool',
      model: 'NTS Micro 150 Pattern Boxer Brief',
      purchases: [
        Purchase.new(
          date: Date.parse('April 2015'),
          version: 'Taupe',
          usage: 'everyday',
        ),
      ],
      purposes: %w(Essential Favorite Formal),
    )
  end

  def create_underwear!(underwear_params)
    create_clothing_item!(underwear_params.merge(type: 'Underwear'))
  end
end
