class CreatePurchases < ActiveRecord::Migration
  def change
    create_table :purchases do |t|
      t.string :version, null: false
      t.date :date, null: false
      t.integer :clothing_item_id, null: false

      t.timestamps null: false
    end
  end
end
