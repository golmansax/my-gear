//= routes/clothing_item_route

describe('routes/clothing_item_route', function () {
  'use strict';

  var model;

  beforeEach(function () {
    model = {
      fetch: sinon.stub(),
      isValid: sinon.stub(),
      on: function () { }
    };
  });

  it('fetches model on initialization', function () {
    model.isValid.returns(false);
    TestUtils.renderIntoDocument(<App.ClothingItemRoute model={model} />);
    expect(model.fetch).to.have.been.calledWith();
  });

  it('renders loading message if model is invalid', function () {
    model.isValid.returns(false);
    var route = TestUtils.renderIntoDocument(
      <App.ClothingItemRoute model={model} />
    );
    expect(TestUtils.findAllInRenderedTree(route, function (instance) {
      return instance.props.children === 'Loading...';
    })).to.have.length(1);
  });

  it('renders ClothingItemDetailedView if model is valid', function () {
    model.isValid.returns(true);
    var route = TestUtils.renderIntoDocument(
      <App.ClothingItemRoute model={model} />
    );
    expect(TestUtils.findRenderedComponentWithType(
      route,
      ClothingItemDetailedView
    )).to.be.ok();
  });
});
