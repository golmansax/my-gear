//= require routes/outfit_route
//= require models/outfit_view_model

describe('routes/outfit_route', function () {
  'use strict';

  beforeEach(function () {
    this.sandbox.stub(App, 'OutfitView', TestUtils.MockComponent);
    this.sandbox.stub(App.OutfitStore, 'get')
      .withArgs('my-outfit')
      .returns(new App.OutfitViewModel({ name: 'kitty' }));

    this.outfitRoute = TestUtils.renderIntoDocument(
      <App.OutfitRoute id={'my-outfit'} />
    );
  });

  it('renders OutfitView with the model attributes', function () {
    var outfitView = TestUtils.findRenderedComponentWithType(
      this.outfitRoute,
      App.OutfitView
    );

    expect(outfitView.props.outfit.name).to.equal('kitty');
  });
});
