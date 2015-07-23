source 'https://rubygems.org'

ruby '2.2.2'

gem 'rails', '~> 4.2.0'
gem 'passenger'
gem 'pg'
gem 'responders'

gem 'bootstrap-sass'
gem 'friendly_id'
gem 'jbuilder'
gem 'gon' # depends on jbuilder
gem 'react-rails'
gem 'sass-rails'
gem 'stink_bomb'
gem 'uglifier'

group :development, :test do
  gem 'bullet'
  gem 'factory_girl_rails'
  gem 'magic_lamp'
  gem 'rspec-rails'
  gem 'rubocop'
  gem 'rubocop-rspec'
  gem 'shoulda-matchers', require: false
  gem 'coffee-rails' # Needed by teaspoon...
  gem 'teaspoon-mocha'
  gem 'travis'
end

group :test do
  gem 'capybara'
  gem 'cucumber-rails', require: false
  gem 'database_cleaner'
  gem 'selenium-webdriver'
end

group :development do
  gem 'spring'
  gem 'spring-commands-rspec'
  gem 'spring-commands-teaspoon'
end

group :production do
  gem 'rails_12factor'
  gem 'dalli'
end

source 'https://rails-assets.org' do
  gem 'rails-assets-classnames'
  gem 'rails-assets-EventEmitter.js'
  gem 'rails-assets-es5-shim'
  gem 'rails-assets-flux'
  gem 'rails-assets-flux-crud'
  gem 'rails-assets-immutable'
  gem 'rails-assets-moment'
  gem 'rails-assets-react'
  gem 'rails-assets-react-bind-mixin'
  gem 'rails-assets-react-bootstrap'
  gem 'rails-assets-react-router'
  gem 'rails-assets-react-router-bootstrap', '~> 0.16.0'
  gem 'rails-assets-reqwest'
  gem 'rails-assets-stink-bomb'

  group :development, :test do
    gem 'rails-assets-chai'
    gem 'rails-assets-dirty-chai'
  end
end
