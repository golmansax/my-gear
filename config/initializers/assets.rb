# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

Rails.application.config.assets.precompile += %w(
  *.svg *.eot *.woff *.woff2 *.ttf *.jpg
)
unless Rails.env.production?
  test_assets = %w(
    teaspoon.css teaspoon-teaspoon.js mocha/*.js teaspoon-mocha.js
    spec_helper.js
  )
  Rails.application.config.assets.precompile += test_assets
end

asset_paths = [Rails.root.join('app', 'assets')]
asset_paths << Rails.root.join('vendor', 'assets')

Rails.application.config.assets.paths.unshift(*asset_paths)
