# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

Rails.application.config.assets.precompile += %w(
  *.svg *.eot *.woff *.ttf *.jpg
)
unless Rails.env.production?
  test_assets = %w(
    teaspoon.css teaspoon-teaspoon.js mocha/*.js teaspoon-mocha.js
    spec_helper.js
  )
  Rails.application.config.assets.precompile += test_assets
end

asset_paths = [Rails.root.join('app', 'assets')]
asset_paths << Rails.root.join('vendor', 'assets', 'bower_components')

# Following is for Bootstrap fonts
asset_paths << Rails.root.join(
  'vendor',
  'assets',
  'bower_components',
  'bootstrap-sass-official',
  'assets',
  'fonts',
)
Rails.application.config.assets.paths.unshift(*asset_paths)
