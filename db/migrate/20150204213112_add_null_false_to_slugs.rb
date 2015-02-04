class AddNullFalseToSlugs < ActiveRecord::Migration
  def change
    change_column_null :outfits, :slug, false
    change_column_null :clothing_items, :slug, false
  end
end
