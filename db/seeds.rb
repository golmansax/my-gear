seeds_path = File.join(Rails.root, 'db', 'seeds')
Dir[File.join(seeds_path, 'clothing_items', '*.rb')].each { |seed| load seed }

load File.join(seeds_path, 'purposes.rb')
