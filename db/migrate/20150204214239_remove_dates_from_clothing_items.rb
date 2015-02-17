class RemoveDatesFromClothingItems < ActiveRecord::Migration
  def change
    remove_column :clothing_items, :first_purchase_date, :date
    remove_column :clothing_items, :recent_purchase_date, :date
  end
end
