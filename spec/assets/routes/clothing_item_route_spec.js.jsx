//= require routes/clothing_item_route
//= require components/clothing_item_detailed_view
//= require models/clothing_item_view_model
//= require actions/clothing_item_actions

describe('routes/clothing_item_route', function () {
  'use strict';

  var id;

  beforeEach(function () {
    id = 'my-clothing-item';
    var fixture = MagicLamp.json('clothing_items/show');

    this.sandbox.stub(App.ClothingItemActions, 'fetch');

    this.sandbox.stub(App, 'ClothingItemDetailedView', TestUtils.MockComponent);
    this.sandbox.stub(App.ClothingItemStore, 'get')
      .withArgs(id)
      .returns(new App.ClothingItemViewModel(fixture));
  });

  it('fetches the clothing item', function () {
    var route = TestUtils.renderIntoDocument(
      <App.ClothingItemRoute id={id} />
    );

    expect(App.ClothingItemActions.fetch).to.have.been.calledWith(id);
  });

  it.skip('renders loading message if model is invalid', function () {
    var route = TestUtils.renderIntoDocument(
      <App.ClothingItemRoute id={id} />
    );
    expect(TestUtils.findAllInRenderedTree(route, function (instance) {
      return instance.props.children === 'Loading...';
    })).to.have.length(1);
  });

  it('renders ClothingItemDetailedView if model is valid', function () {
    var route = TestUtils.renderIntoDocument(
      <App.ClothingItemRoute id={id} />
    );
    expect(TestUtils.findRenderedComponentWithType(
      route,
      TestUtils.MockComponent
    )).to.be.ok();
  });
});
