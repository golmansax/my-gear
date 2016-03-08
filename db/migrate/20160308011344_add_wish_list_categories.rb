class AddWishListCategories < ActiveRecord::Migration
  def change
    create_table :wish_list_categories do |t|
      t.string :name, null: false
      t.string :slug, null: false
      t.string :clothing_item_ids, array: true, null: false

      t.timestamps null: false
    end

    add_index :wish_list_categories, :slug, unique: true
    add_index :brands, :slug, unique: true
  end
end
