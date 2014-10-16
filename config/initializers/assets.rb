# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are
# already added.
# Rails.application.config.assets.precompile += %w( search.js )

asset_paths = [
  Rails.root.join('assets', 'components'),
  Rails.root.join('assets', 'helpers'),
]
Rails.application.config.assets.paths += asset_paths
