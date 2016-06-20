# frozen_string_literal: true
class InitialDbSetup < ActiveRecord::Migration
  def change
    create_table :clothing_items do |t|
      t.string :model, null: false
      t.string :type, null: false
      t.string :slug, null: false
      t.integer :brand_id, null: false

      t.timestamps
    end

    add_index :clothing_items, :slug, unique: true

    create_table :purchases_purposes, id: false do |t|
      t.integer :purchase_id
      t.integer :purpose_id
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

    create_table :purposes, force: true do |t|
      t.string :name, null: false
      t.string :slug, null: false

      t.timestamps
    end

    add_index :purposes, :slug, unique: true

    create_table :purchases do |t|
      t.string :version, null: false
      t.date :date, null: false
      t.integer :clothing_item_id, null: false

      t.timestamps
    end

    create_table :brands do |t|
      t.string :name, null: false
      t.string :slug, null: false
      t.timestamps
    end
  end
end
