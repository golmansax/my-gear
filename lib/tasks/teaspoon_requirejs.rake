task teaspoon_requirejs: :environment do
  Rails.application.config.assets.precompile = ['requirejs_sync_boot.js']
  ENV['RAILS_GROUPS'] = 'development'
  Rake::Task['assets:precompile'].invoke
end
