//= require components/clothing_item_grid
//= require components/clothing_item_view
//= require models/clothing_item

describe('components/clothing_item_grid', function () {
  'use strict';

  var clothingItem;

  beforeEach(function () {
    var fixture = MagicLamp.json('clothing_items/show');
    clothingItem = new App.ClothingItem(fixture, { parse: true });

    this.sandbox.stub(App, 'ClothingItemView', TestUtils.MockComponent)
  });

  it('renders a ClothingItemView for each clothingItem', function () {
    var grid = TestUtils.renderIntoDocument(
      <App.ClothingItemGrid ids={[clothingItem.id]} />
    );

    var clothingItemViews = TestUtils.scryRenderedComponentsWithType(
      grid,
      App.ClothingItemView
    );
    expect(clothingItemViews).to.have.length(1);
  });
});
