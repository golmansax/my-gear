//= require routes/outfit_route

describe('routes/outfit_route', function () {
  'use strict';

  beforeEach(function () {
    this.sandbox.stub(App, 'OutfitView', TestUtils.MockComponent);
    this.model = new TestUtils.MockModel({ hello: 'kitty' });
    this.sandbox.stub(this.model, 'fetch');

    this.outfitRoute = TestUtils.renderIntoDocument(
      <App.OutfitRoute model={this.model} />
    );
  });

  it('fetches model on initialization', function () {
    expect(this.model.fetch).to.have.been.calledWith();
  });

  it('renders OutfitView with the model attributes', function () {
    var outfitView = TestUtils.findRenderedComponentWithType(
      this.outfitRoute,
      App.OutfitView
    );

    expect(outfitView.props).to.deep.equal({ hello: 'kitty' });
  });
});
