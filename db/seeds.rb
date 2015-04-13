seeds_path = File.join(Rails.root, 'db', 'seeds')
Dir[File.join(seeds_path, 'clothing_items', '*.rb')].each { |seed| load seed }

load File.join(seeds_path, 'purposes.rb')

Dir[File.join(seeds_path, 'clothing_item_seeders', '*.rb')].each do |seeder|
  require seeder
end
[BottomSeeder].each { |seeder_klass| seeder_klass.new.seed! }
