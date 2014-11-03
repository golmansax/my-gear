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
    suite.matcher = 'spec/assets/**/*_spec.js'
    suite.boot_partial = 'boot_require_js'
    suite.no_coverage = [%r{/vendor/assets/}, %r{/spec/assets}]
  end

  config.use_coverage = :default

  config.coverage do |coverage|
    coverage.reports = ['text-summary', 'html']
    coverage.output_path = 'coverage/istanbul'
    coverage.statements = 90
    coverage.branches = 90
    coverage.functions = 90
    coverage.lines = 90
  end

  config.coverage :ci do |coverage|
    coverage.reports = ['text']
    coverage.statements = 90
    coverage.branches = 90
    coverage.functions = 90
    coverage.lines = 90
  end
end
