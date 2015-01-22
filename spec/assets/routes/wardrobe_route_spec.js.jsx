//= require routes/wardrobe_route

describe('routes/wardrobe_route', function () {
  'use strict';

  beforeEach(function () {
    this.collectionMock = new TestUtils.MockCollection([{ hello: 'kitty' }]);
    this.sandbox.stub(this.collectionMock, 'fetch');

    this.sandbox.stub(App, 'ClothingItemGrid', TestUtils.MockComponent);

    this.wardrobeRoute = TestUtils.renderIntoDocument(
      <App.WardrobeRoute collection={this.collectionMock} />
    );
  });

  it('fetches the collection', function () {
    expect(this.collectionMock.fetch.called).to.be.true();
  });

  it('renders a ClothingItemGrid with the collections', function () {
    var grid = TestUtils.findRenderedComponentWithType(
      this.wardrobeRoute,
      App.ClothingItemGrid
    );

    expect(grid.props.clothingItems).to.deep.equal([{ hello: 'kitty' }]);
  });
});
