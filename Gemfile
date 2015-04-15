source 'https://rubygems.org'

ruby '2.1.5'

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
gem 'uglifier'

group :development, :test do
  gem 'bullet'
  gem 'database_cleaner'
  gem 'factory_girl_rails'
  gem 'magic_lamp'
  gem 'rspec-rails'
  gem 'rubocop'
  gem 'shoulda-matchers'
  gem 'spring'
  gem 'spring-commands-rspec'
  gem 'spring-commands-teaspoon'
  gem 'teaspoon'
  gem 'coffee-rails' # Needed by teaspoon...
  gem 'travis'
end

group :production do
  gem 'rails_12factor'
  gem 'dalli'
end

source 'https://rails-assets.org' do
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
end
