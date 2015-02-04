class AddNullFalseToTimestamps < ActiveRecord::Migration
  def change
    change_column_null :clothing_items, :created_at, false
    change_column_null :clothing_items, :updated_at, false
    change_column_null :outfits, :created_at, false
    change_column_null :outfits, :updated_at, false
  end
end
