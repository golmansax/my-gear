class RemoveDatesFromClothingItems < ActiveRecord::Migration
  def up
    remove_column :clothing_items, :first_purchase_date, :date, null: false
    remove_column :clothing_items, :recent_purchase_date, :date, null: false
  end

  def down
    remove_column :clothing_items, :first_purchase_date, :date, null: true
    remove_column :clothing_items, :recent_purchase_date, :date, null: true
  end
end
