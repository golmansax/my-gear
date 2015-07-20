Given 'I have an essential clothing item' do
  @essential = Top.create!(brand: Brand.new(name: 'Marmot'), model: 'Jacket')
end

When 'I go to a list of essentials' do
  visit '/'
  click_link('Essentials')
  expect(page).to have_content('Essential Clothing')
end

Then 'the essential item is displayed' do
  expect(page).to have_content('Marmot Jacket')
end
