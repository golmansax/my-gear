//= require routes/wardrobe_route
//= require models/clothing_item_view_model

describe('routes/wardrobe_route', function () {
  'use strict';

  beforeEach(function () {
    this.sandbox.useFakeServer();

    var clothingItems = new Immutable.List();
    clothingItems = clothingItems.push(new App.ClothingItemViewModel({
      id: 'hello'
    }));
    clothingItems = clothingItems.push(new App.ClothingItemViewModel({
      id: 'kitty'
    }));

    this.sandbox.stub(App.ClothingItemStore, 'getAll').returns(clothingItems);

    this.sandbox.stub(App, 'ClothingItemGrid', TestUtils.MockComponent);

    this.wardrobeRoute = TestUtils.renderIntoDocument(
      <App.WardrobeRoute  />
    );
  });

  it('renders a ClothingItemGrid with the collections', function () {
    var grid = TestUtils.findRenderedComponentWithType(
      this.wardrobeRoute,
      TestUtils.MockComponent
    );

    expect(grid.props.ids).to.deep.equal(['hello', 'kitty']);
  });
});
