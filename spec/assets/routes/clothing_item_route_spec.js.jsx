//= require routes/clothing_item_route
//= require components/clothing_item_detailed_view

describe('routes/clothing_item_route', function () {
  'use strict';

  var model;

  beforeEach(function () {
    model = new TestUtils.MockModel();

    this.sandbox.stub(App, 'ClothingItemDetailedView', TestUtils.MockComponent);
    this.sandbox.useFakeServer();
  });

  it('fetches model on initialization', function () {
    TestUtils.renderIntoDocument(<App.ClothingItemRoute data={{ id: 77 }} />);
    expect(this.sandbox.server.requests[0].url).to.contain('clothing_items/77');
  });

  it('renders loading message if model is invalid', function () {
    this.sandbox.stub(model, 'isValid').returns(false);
    var route = TestUtils.renderIntoDocument(
      <App.ClothingItemRoute model={model} />
    );
    expect(TestUtils.findAllInRenderedTree(route, function (instance) {
      return instance.props.children === 'Loading...';
    })).to.have.length(1);
  });

  it('renders ClothingItemDetailedView if model is valid', function () {
    this.sandbox.stub(model, 'isValid').returns(true);
    var route = TestUtils.renderIntoDocument(
      <App.ClothingItemRoute model={model} />
    );
    expect(TestUtils.findRenderedComponentWithType(
      route,
      App.ClothingItemDetailedView
    )).to.be.ok();
  });
});
