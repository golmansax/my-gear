class CreateBrands < ActiveRecord::Migration
  def change
    create_table :brands do |t|
      t.string :name, null: false
      t.string :slug, null: false
      t.timestamps
    end

    remove_column :clothing_items, :brand, :string, null: false
    add_column :clothing_items, :brand_id, :integer, null: false
  end
end
