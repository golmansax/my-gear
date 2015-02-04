class RemoveDatesFromClothingItems < ActiveRecord::Migration
  def change
    remove_column :clothing_items, :first_purchase_date, :date, null: false
    remove_column :clothing_items, :recent_purchase_date, :date, null: false
  end
end
