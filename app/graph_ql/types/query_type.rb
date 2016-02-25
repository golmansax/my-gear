QueryType = GraphQL::ObjectType.define do
  name 'Query'
  description 'The query root of this schema'

  field :clothingItems do
    type !types[!ClothingItemType]
    description 'All clothing items'
    resolve proc { ClothingItem.all.includes(:purchases, :brand) }
  end

  field :brands do
    type !types[!BrandType]
    description 'All brands'
    resolve proc { Brand.all.includes(:purchases) }
  end

  field :purchases do
    type !types[!PurchaseType]
    description 'All purchases'
    resolve proc { Purchase.all.includes(:purposes, :clothing_item) }
  end

  field :purposes do
    type !types[!PurposeType]
    description 'All purposes'
    resolve proc { Purpose.all.includes(:purchases) }
  end

  field :wishListCategories do
    type !types[!WishListCategoryType]
    description 'All wish list categories'
    resolve proc {
      WishListCategory = Struct.new(:id, :name, :clothingItemIds)
      [
        WishListCategory.new(
          'short-sleeve-henley',
          'Short-sleeve henley',
          [
            'vulpine-men-s-merino-henley'
            'icebreaker-cool-lite-sphere-short-sleeve-henley'
            'icebreaker-cool-lite-sphere-short-sleeve-henley'
          ],
        ),
        WishListCategory.new(
          'winter-boots',
          'Winter boots',
          [
            'neos-overshoe-adventurer',
            'kitsbox-ride-tee-tritone',
          ],
        ),
        WishListCategory.new(
          'formal-performance-pants',
          'Formal, performance pants',
          [
            'outlier-new-og-pant',
            'rapha-loopback-trouser',
          ],
        ),
        WishListCategory.new(
          'climbing-shoes',
          'Climbing shoes',
          [
            'scarpa-furia',
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
end
