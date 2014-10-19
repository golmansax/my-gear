# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

Rails.application.config.assets.precompile += %w(*.svg *.eot *.woff *.ttf)

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
