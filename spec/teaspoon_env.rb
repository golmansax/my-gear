# Set RAILS_ROOT and load the environment if it's not already loaded.
unless defined?(Rails)
  ENV['RAILS_ROOT'] = File.expand_path('../../', __FILE__)
  require File.expand_path('../../config/environment', __FILE__)
end

Teaspoon.configure do |config|
  config.asset_paths = ['spec/assets']
  config.fixture_paths = []

  config.suite do |suite|
    suite.use_framework :mocha
    suite.matcher = 'spec/assets/**/*_spec.{js,js.jsx,.jsx}'
    suite.no_coverage = [%r{/vendor/assets/}, %r{/spec/assets}]
  end

  def add_coverage_thresholds!(coverage)
    coverage.statements = 100
    coverage.branches = 100
    coverage.functions = 100
    coverage.lines = 100
  end

  config.coverage do |coverage|
    coverage.reports = ['text-summary', 'html']
    coverage.output_path = 'coverage/istanbul'
    add_coverage_thresholds!(coverage)
  end

  config.coverage :ci do |coverage|
    coverage.reports = ['text']
    add_coverage_thresholds!(coverage)
  end
end
