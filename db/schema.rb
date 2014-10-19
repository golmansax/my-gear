# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20141019002749) do

  create_table "clothing_items", force: true do |t|
    t.string   "model",                null: false
    t.string   "brand",                null: false
    t.string   "type",                 null: false
    t.date     "recent_purchase_date", null: false
    t.date     "first_purchase_date",  null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "clothing_items_outfits", id: false, force: true do |t|
    t.integer "clothing_item_id"
    t.integer "outfit_id"
  end

  create_table "outfits", force: true do |t|
    t.string   "name",       null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
