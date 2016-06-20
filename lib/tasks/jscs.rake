# frozen_string_literal: true
task :jscs do
  sh 'node_modules/.bin/jscs . -v'
end
