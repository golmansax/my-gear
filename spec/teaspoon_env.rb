# frozen_string_literal: true
# Set RAILS_ROOT and load the environment if it's not already loaded.
unless defined?(Rails)
  ENV['RAILS_ROOT'] = File.expand_path('../../', __FILE__)
  require File.expand_path('../../config/environment', __FILE__)
end

Teaspoon.configure do |config|
  config.asset_paths = ['spec/frontend']
  config.fixture_paths = []

  config.suite do |suite|
    suite.use_framework :mocha
    suite.matcher = 'spec/frontend/**/*_spec.{js,js.jsx,.jsx}'
  end

  def add_coverage_thresholds!(coverage)
    coverage.statements = 75
    coverage.branches = 60
    coverage.functions = 75
    coverage.lines = 75
    coverage.ignore = [%r{/vendor/}, /\.rvm/, %r{/tmp/}]
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
