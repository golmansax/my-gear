//= require components/clothing_item_grid
//= require models/clothing_item

describe('components/clothing_item_grid', function () {
  'use strict';

  var clothingItem;

  beforeEach(function () {
    var fixture = MagicLamp.json('clothing_items/show');
    clothingItem = new App.ClothingItem(fixture, { parse: true });
  });

  it('renders a ClothingItemView for each clothingItem', function () {
    var grid = TestUtils.renderIntoDocument(
      <App.ClothingItemGrid clothingItems={[clothingItem.attributes]} />
    );

    var clothingItemViews = TestUtils.scryRenderedComponentsWithType(
      grid,
      ClothingItemView
    );
    expect(clothingItemViews).to.have.length(1);
  });
});
