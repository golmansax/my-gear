class AddUsageToClothingItems < ActiveRecord::Migration
  def change
    add_column :clothing_items, :usage, :integer, default: 0, null: false
  end
end
