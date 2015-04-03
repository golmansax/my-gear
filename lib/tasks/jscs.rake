task :jscs do
  sh 'node_modules/.bin/jscs app/assets spec/assets --esprima=esprima-fb'
end
