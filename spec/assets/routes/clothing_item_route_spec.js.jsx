//= require routes/clothing_item_route
//= require components/clothing_item_detailed_view

describe('routes/clothing_item_route', function () {
  'use strict';

  var model;

  beforeEach(function () {
    model = new TestUtils.MockModel();

    this.sandbox.stub(App, 'ClothingItemDetailedView', TestUtils.MockComponent);
  });

  it('fetches model on initialization', function () {
    this.sandbox.stub(model, 'fetch');
    TestUtils.renderIntoDocument(<App.ClothingItemRoute model={model} />);
    expect(model.fetch).to.have.been.calledWith();
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
