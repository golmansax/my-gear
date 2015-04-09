class InitialDbSetup < ActiveRecord::Migration
  def change
    create_table :clothing_items do |t|
      t.string :model, null: false
      t.string :brand, null: false
      t.string :type, null: false
      t.string :slug, null: false

      t.timestamps
    end

    add_index :clothing_items, :slug, unique: true

    create_table :clothing_items_outfits, id: false do |t|
      t.integer :clothing_item_id
      t.integer :outfit_id
    end

    create_table :friendly_id_slugs do |t|
      t.string :slug, null: false
      t.integer :sluggable_id, null: false
      t.string :sluggable_type, limit: 50
      t.string :scope
      t.datetime :created_at
    end

    add_index :friendly_id_slugs, :sluggable_id
    add_index :friendly_id_slugs, [:slug, :sluggable_type]
    add_index :friendly_id_slugs, [:slug, :sluggable_type, :scope], unique: true
    add_index :friendly_id_slugs, :sluggable_type

    create_table :outfits, force: true do |t|
      t.string :name, null: false
      t.string :slug, null: false

      t.timestamps
    end

    add_index :outfits, :slug, unique: true

    create_table :purchases do |t|
      t.string :version, null: false
      t.date :date, null: false
      t.integer :clothing_item_id, null: false
      t.integer :usage, null: false

      t.timestamps
    end
  end
end
