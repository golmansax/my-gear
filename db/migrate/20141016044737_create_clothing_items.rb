class CreateClothingItems < ActiveRecord::Migration
  def change
    create_table :clothing_items do |t|
      t.string :model, null: false
      t.string :brand, null: false
      t.string :type, null: false
      t.date :recent_purchase_date, null: false
      t.date :first_purchase_date, null: false

      t.timestamps
    end
  end
end
