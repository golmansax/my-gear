define([
  'routes/list_route', 'collections/clothing_item_collection',
  'support/test_utils', 'bower/react', 'support/magic_lamp'
], function (ListRoute, ClothingItemCollection,
             TestUtils, React, MagicLamp) {

  'use strict';

  describe('routes/list_route', function () {
    var server;

    beforeEach(function () { server = sinon.fakeServer.create(); });
    afterEach(function () { server.restore(); });

    beforeEach(function () {
      this.collection = new ClothingItemCollection([]);
      this.fetchSpy = sinon.spy(this.collection, 'fetch');

      this.listRoute = TestUtils.renderIntoDocument(
        <ListRoute collection={this.collection} />
      );
    });

    it('fetches the collection', function () {
      expect(this.fetchSpy.called).to.be.true();
    });

    it('sorts list when table header is clicked', function () {
      var fixture = MagicLamp.rawJson('clothing_items/index');
      server.requests[0].respond(200, 'application/json', fixture);

      var headers = TestUtils.scryRenderedDOMComponentsWithTag(
        this.listRoute,
        'th'
      );
      TestUtils.Simulate.click(headers[0]);

      // Test a reverse sort
      TestUtils.Simulate.click(headers[0]);
    });
  });
});
