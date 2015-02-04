class RemoveDefaultFromUsageOnPurchases < ActiveRecord::Migration
  def up
    change_column_default :purchases, :usage, nil
  end

  def down
    change_column_default :purchases, :usage, 0
  end
end
