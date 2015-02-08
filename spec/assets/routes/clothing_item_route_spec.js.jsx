//= require routes/clothing_item_route
//= require components/clothing_item_detailed_view

describe('routes/clothing_item_route', function () {
  'use strict';

  var model;
  var id;

  beforeEach(function () {
    id = 'my-clothing-item';
    model = new TestUtils.MockModel();

    this.sandbox.stub(App, 'ClothingItemDetailedView', TestUtils.MockComponent);
    this.sandbox.stub(App.ClothingItemStore, 'get').withArgs(id).returns(model);
    this.sandbox.useFakeServer();
  });

  it.skip('renders loading message if model is invalid', function () {
    var route = TestUtils.renderIntoDocument(
      <App.ClothingItemRoute id={id} />
    );
    expect(TestUtils.findAllInRenderedTree(route, function (instance) {
      return instance.props.children === 'Loading...';
    })).to.have.length(1);
  });

  it.skip('renders ClothingItemDetailedView if model is valid', function () {
    var route = TestUtils.renderIntoDocument(
      <App.ClothingItemRoute id={id} />
    );
    expect(TestUtils.findRenderedComponentWithType(
      route,
      App.ClothingItemDetailedView
    )).to.be.ok();
  });
});
