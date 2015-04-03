task :jsxhint do
  sh 'node_modules/.bin/jsxhint app/assets spec/assets'
end
