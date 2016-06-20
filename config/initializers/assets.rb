# frozen_string_literal: true
# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

Rails.application.config.assets.precompile += %w(
  application.js application.css *.svg *.eot *.woff *.woff2 *.ttf *.jpg *.ico
)

if Rails.env.development?
  Rails.application.config.assets.precompile += %w(
    teaspoon.css teaspoon-teaspoon.js mocha/*.js teaspoon-mocha.js
    spec_helper.js
  )
end

asset_paths = [Rails.root.join('app', 'frontend')]
Rails.application.config.assets.paths.unshift(*asset_paths)
