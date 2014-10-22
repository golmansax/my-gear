before_rake_task 'requirejs:precompile:external' do
  BowerRails.tasks.map do |task|
    Rake::Task[task].invoke
  end
end
