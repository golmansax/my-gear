//= require components/clothing_item_grid
//= require components/clothing_item_view
//= require models/clothing_item

describe('components/clothing_item_grid', function () {
  'use strict';

  var id;

  beforeEach(function () {
    var fixture = MagicLamp.json('clothing_items/show');
    id = fixture.id;

    this.sandbox.stub(App, 'ClothingItemView', TestUtils.MockComponent)
  });

  it('renders a ClothingItemView for each clothingItem', function () {
    var grid = TestUtils.renderIntoDocument(
      <App.ClothingItemGrid ids={[id]} />
    );

    var clothingItemViews = TestUtils.scryRenderedComponentsWithType(
      grid,
      TestUtils.MockComponent
    );
    expect(clothingItemViews).to.have.length(1);
  });
});
