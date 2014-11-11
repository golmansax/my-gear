MagicLamp.configure do |config|
  DatabaseCleaner.strategy = :transaction

  config.before_each { DatabaseCleaner.start }
  config.after_each { DatabaseCleaner.clean }
end
