//= require routes/outfit_route

describe('routes/outfit_route', function () {
  'use strict';

  beforeEach(function () {
    this.sandbox.stub(App, 'OutfitView', TestUtils.MockComponent);
    this.sandbox.stub(App.OutfitStore, 'get')
      .withArgs('my-outfit')
      .returns({ hello: 'kitty' });

    this.outfitRoute = TestUtils.renderIntoDocument(
      <App.OutfitRoute id={'my-outfit'} />
    );
  });

  it('renders OutfitView with the model attributes', function () {
    var outfitView = TestUtils.findRenderedComponentWithType(
      this.outfitRoute,
      App.OutfitView
    );

    expect(outfitView.props).to.deep.equal({ hello: 'kitty' });
  });
});
