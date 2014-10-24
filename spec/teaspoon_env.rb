# Set RAILS_ROOT and load the environment if it's not already loaded.
unless defined?(Rails)
  ENV['RAILS_ROOT'] = File.expand_path('../../', __FILE__)
  require File.expand_path('../../config/environment', __FILE__)
end

Teaspoon.configure do |config|
  config.asset_paths = ['spec/assets']
  config.fixture_paths = ['spec/assets/fixtures']

  config.suite do |suite|
    suite.use_framework :mocha
  end

  #config.use_coverage = nil

  config.coverage do |coverage|
    coverage.reports = ['text-summary', 'html']
    coverage.output_path = 'coverage/istanbul'
    coverage.statements = 20
    coverage.branches = 2
    coverage.functions = 10
    coverage.lines = 20
  end

  config.coverage :ci do |coverage|
    coverage.reports = ['text']
    coverage.statements = 20
    coverage.branches = 2
    coverage.functions = 10
    coverage.lines = 20
  end
end
