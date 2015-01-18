seeds_path = File.join(Rails.root, 'db', 'seeds')
Dir[File.join(seeds_path, 'clothing_items', '*.rb')].each { |seed| load seed }
Dir[File.join(seeds_path, 'outfits', '*.rb')].each { |seed| load seed }
