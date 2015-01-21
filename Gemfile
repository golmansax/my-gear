source 'https://rubygems.org'

ruby '2.1.5'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.1.6'
gem 'pg'
gem 'unicorn'

gem 'bower-rails'
gem 'friendly_id', '~> 5.0.0'
gem 'jbuilder', '~> 2.0'
gem 'react-rails', '~> 1.0.0.pre', github: 'reactjs/react-rails'
gem 'sass-rails', '~> 4.0.3'
gem 'uglifier', '>= 1.3.0'

group :development do
  gem 'spring'
  gem 'spring-commands-rspec'
end

group :test do
  gem 'database_cleaner'
  gem 'factory_girl_rails'
  gem 'magic_lamp'
  gem 'shoulda-matchers'
  gem 'teaspoon'
end

group :development, :test do
  gem 'rspec-rails', '~> 3.0.0'
  gem 'rubocop'
  gem 'spring-commands-teaspoon'
  gem 'travis'
end

group :production do
  gem 'rails_12factor'
end
