WishListCategoryIndexField = GraphQL::Field.define do
  type !types[!WishListCategoryType]
  description 'All wish list categories'

  resolve proc {
    WishListCategory = Struct.new(:id, :name, :clothingItemIds)
    [
      WishListCategory.new(
        'short-sleeve-henley',
        'Short-sleeve henley',
        [
          'vulpine-men-s-merino-henley',
          'icebreaker-cool-lite-sphere-short-sleeve-henley',
          'kitsbow-ride-tee-tritone',
          'ibex-od-henley-t',
        ],
      ),
      WishListCategory.new(
        'winter-boots',
        'Winter boots',
        [
          'neos-overshoe-adventurer',
        ],
      ),
      WishListCategory.new(
        'climbing-shoes',
        'Climbing shoes',
        [
          'scarpa-furia',
          'mad-rock-men-s-flash-2-0-climbing-shoe',
        ],
      ),
      WishListCategory.new(
        'everyday-short',
        'Everyday short',
        [
          'myles-everyday-short',
        ],
      ),
      WishListCategory.new(
        'all-around-athletic-shoe',
        'All around athletic shoe',
        [
          'vivobarefoot-motus',
        ],
      ),
    ]
  }
end
