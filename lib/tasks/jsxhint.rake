task :jsxhint do
  sh 'node_modules/.bin/jsxhint . --exclude-path .jshintignore'
end
