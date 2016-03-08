source 'https://rubygems.org'

ruby '2.3.0'

gem 'rails', '~> 4.2.0'
gem 'passenger'
gem 'pg'
gem 'responders'

gem 'bootstrap-sass'
gem 'friendly_id'
gem 'jbuilder'
gem 'gon' # depends on jbuilder
gem 'graphql'
gem 'react-rails'
gem 'sass-rails'
gem 'stink_bomb'
gem 'uglifier'

group :development, :test do
  gem 'bullet'
  gem 'magic_lamp'
  gem 'rubocop', require: false
  gem 'rubocop-rspec', require: false
  gem 'coffee-rails' # Needed by teaspoon...
  gem 'teaspoon-mocha'
  gem 'travis'
end

group :test do
  gem 'capybara'
  gem 'cucumber-rails', require: false
  gem 'database_cleaner'
  gem 'factory_girl_rails'
  gem 'rspec-rails'
  gem 'selenium-webdriver'
  gem 'shoulda-matchers'
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
  gem 'rails-assets-react', '~> 0.14.0'
  gem 'rails-assets-react-bind-mixin'
  gem 'rails-assets-react-bootstrap'
  gem 'rails-assets-react-router-bootstrap'
  gem 'rails-assets-reqwest'
  gem 'rails-assets-stink-bomb'

  group :development, :test do
    gem 'rails-assets-chai'
    gem 'rails-assets-dirty-chai'
  end
end
