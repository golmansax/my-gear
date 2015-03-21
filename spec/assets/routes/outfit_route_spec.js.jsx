//= require routes/outfit_route
//= require models/outfit_view_model
//= require actions/outfit_actions

describe('routes/outfit_route', function () {
  'use strict';

  beforeEach(function () {
    this.sandbox.stub(App.OutfitActions, 'fetch');
    this.sandbox.stub(App, 'OutfitView', TestUtils.MockComponent);
    this.sandbox.stub(App.OutfitStore, 'get')
      .withArgs('my-outfit')
      .returns(new App.OutfitViewModel({ name: 'kitty' }));

    this.outfitRoute = TestUtils.renderIntoDocument(
      <App.OutfitRoute id={'my-outfit'} />
    );
  });

  it('fetches the model on load', function () {
    expect(App.OutfitActions.fetch).to.have.been.calledWith('my-outfit');
  });

  it('renders OutfitView with the model attributes', function () {
    var outfitView = TestUtils.findRenderedComponentWithType(
      this.outfitRoute,
      TestUtils.MockComponent
    );

    expect(outfitView.props.outfit.name).to.equal('kitty');
  });
});
