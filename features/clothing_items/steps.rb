Given 'I have an essential clothing item' do
  brand = Brand.new(name: 'Marmot')
  @clothing_item = Top.create!(brand: brand, model: 'Jacket')
  @clothing_item.purchases.create!(date: Time.zone.now, version: 'Green')
  @clothing_item.purchases.first.purposes.create!(name: 'essential')
end

When 'I go to a list of essentials' do
  visit '/'
  click_link('Essentials')
  expect(page).to have_content('Essential Clothing')
end

Then 'the essential item is displayed' do
  expect(page).to have_content('Marmot Jacket')
end
