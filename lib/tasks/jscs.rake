task :jscs do
  sh 'jscs app/assets spec/assets --esprima=esprima-fb'
end
