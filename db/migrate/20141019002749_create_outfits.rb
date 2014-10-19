class CreateOutfits < ActiveRecord::Migration
  def change
    create_table :outfits do |t|
      t.string :name, null: false
      t.timestamps
    end

    create_table :clothing_items_outfits, id: false do |t|
      t.belongs_to :clothing_item
      t.belongs_to :outfit
    end
  end
end
