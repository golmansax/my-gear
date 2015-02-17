//= require routes/list_route
//= require collections/clothing_item_collection

describe('routes/list_route', function () {
  'use strict';

  var server;

  beforeEach(function () { server = sinon.fakeServer.create(); });
  afterEach(function () { server.restore(); });

  beforeEach(function () {
    var collection = new App.ClothingItemCollection(
      MagicLamp.json('clothing_items/index')
    ).toJSON();
    this.sandbox.stub(App.ClothingItemStore, 'getAll').returns(collection);

    this.listRoute = TestUtils.renderIntoDocument(<App.ListRoute />);
  });

  it('renders a table group', function () {
    expect(TestUtils.findRenderedComponentWithType(
      this.listRoute,
      App.ClothingItemTableGroup
    )).to.be.ok();
  });

  it.skip('sorts list when table header is clicked', function () {
    var headers = TestUtils.scryRenderedDOMComponentsWithTag(
      this.listRoute,
      'th'
    );
    TestUtils.Simulate.click(headers[0]);

    // Test a reverse sort
    TestUtils.Simulate.click(headers[0]);
  });
});
