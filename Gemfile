source 'https://rubygems.org'
source 'https://rails-assets.org'

ruby '2.1.5'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 4.1.6'
gem 'pg'
gem 'passenger'

gem 'bootstrap-sass', '~> 3.3.3'
gem 'friendly_id', '~> 5.0.0'
gem 'jbuilder', '~> 2.0'
gem 'gon' # depends on jbuilder
gem 'react-rails', '~> 1.0.0.pre', github: 'reactjs/react-rails'
gem 'sass-rails', '~> 4.0.5'
gem 'uglifier', '>= 1.3.0'

group :test do
  gem 'factory_girl_rails'
  gem 'shoulda-matchers'
end

group :development, :test do
  gem 'database_cleaner'
  gem 'magic_lamp'
  gem 'rspec-rails', '~> 3.0.0'
  gem 'rubocop'
  gem 'spring'
  gem 'spring-commands-rspec'
  gem 'spring-commands-teaspoon'
  gem 'teaspoon'
  gem 'travis'
end

group :production do
  gem 'rails_12factor'
end

# Heroku doesn't support this syntax yet :( source 'https://rails-assets.org' do
gem 'rails-assets-backbone'
gem 'rails-assets-backbone-sortable-collection'
gem 'rails-assets-backbone.mutators'
gem 'rails-assets-backbone.nativeajax'
gem 'rails-assets-es5-shim'
gem 'rails-assets-flux-crud-store'
gem 'rails-assets-immutable'
gem 'rails-assets-moment'
gem 'rails-assets-react', '~> 0.12.0'
gem 'rails-assets-react-bind-mixin'
gem 'rails-assets-react-bootstrap'
gem 'rails-assets-react-router'
gem 'rails-assets-underscore'

group :development, :test do
  gem 'rails-assets-chai'
  gem 'rails-assets-dirty-chai'
end
