class MoveUsageToPurchases < ActiveRecord::Migration
  def up
    add_column :purchases, :usage, :integer, default: 0, null: false
    remove_column :clothing_items, :usage
  end

  def down
    add_column :clothing_items, :usage, :integer, default: 0, null: false
    remove_column :purchases, :usage
  end
end
