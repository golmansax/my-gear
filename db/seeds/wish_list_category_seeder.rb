# frozen_string_literal: true
class WishListCategorySeeder
  def seed!
    create_wish_list_category!(
      name: 'Short-sleeve henley',
      clothing_item_ids: [
        'vulpine-men-s-merino-henley',
        'icebreaker-cool-lite-sphere-short-sleeve-henley',
        'ibex-od-henley-t',
      ],
    )

    create_wish_list_category!(
      name: 'Long-sleeve henley',
      clothing_item_ids: [
        'apolis-merino-wool-henley',
        'triple-aught-design-huntsman-henley',
        'showers-pass-men-s-bamboo-merino-ls-henley-shirt',
      ],
    )

    create_wish_list_category!(
      name: 'Winter boots',
      clothing_item_ids: [
        'neos-overshoe-adventurer',
      ],
    )

    create_wish_list_category!(
      name: 'Climbing shoes',
      clothing_item_ids: [
        'scarpa-furia',
        'mad-rock-men-s-flash-2-0-climbing-shoe',
      ],
    )

    create_wish_list_category!(
      name: 'Everyday short',
      clothing_item_ids: [
        'outlier-new-way-long',
      ],
    )

    create_wish_list_category!(
      name: 'All around athletic shoe',
      clothing_item_ids: [
        'vivobarefoot-motus',
      ],
    )

    create_wish_list_category!(
      name: 'Waterproof jacket',
      clothing_item_ids: [
        'marmot-precip-jacket',
        'outdoor-research-foray-jacket',
      ],
    )

    create_wish_list_category!(
      name: 'Longer lasting sock',
      clothing_item_ids: [
        'injinji-multi-sport-plus-midweight-mini-crew',
      ],
    )
  end

  def create_wish_list_category!(wish_list_category_params)
    # Make sure that the clothing items exist
    # ClothingItem.friendly.find(wish_list_category_params[:clothing_item_ids])
    wish_list_category_params[:clothing_item_ids].each do |clothing_item_id|
      ClothingItem.friendly.find(clothing_item_id)
    end

    WishListCategory.create!(wish_list_category_params)
  end
end
