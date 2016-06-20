# frozen_string_literal: true
seeds_path = File.join(Rails.root, 'db', 'seeds')
Dir[File.join(seeds_path, 'clothing_item_seeders', '*.rb')].each do |seeder|
  require seeder
end
require "#{seeds_path}/wish_list_category_seeder"

[
  TopSeeder, BottomSeeder, OuterwearSeeder, UnderwearSeeder, SockSeeder,
  FootwearSeeder, GloveSeeder, WishListCategorySeeder
].each { |seeder_klass| seeder_klass.new.seed! }
