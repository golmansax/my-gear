//= require routes/wardrobe_route

describe('routes/wardrobe_route', function () {
  'use strict';

  beforeEach(function () {
    this.sandbox.stub(App.ClothingItemStore, 'getAll')
      .withArgs({ pluck: 'id' })
      .returns(['hello', 'kitty']);

    this.sandbox.stub(App, 'ClothingItemGrid', TestUtils.MockComponent);

    this.wardrobeRoute = TestUtils.renderIntoDocument(
      <App.WardrobeRoute  />
    );
  });

  it('renders a ClothingItemGrid with the collections', function () {
    var grid = TestUtils.findRenderedComponentWithType(
      this.wardrobeRoute,
      App.ClothingItemGrid
    );

    expect(grid.props.ids).to.deep.equal(['hello', 'kitty']);
  });
});
