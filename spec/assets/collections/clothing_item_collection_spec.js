//= require collections/clothing_item_collection

describe('collections/clothing_item_collection', function () {
  'use strict';

  var clothingItems;
  var server;

  beforeEach(function () { server = sinon.fakeServer.create(); });
  afterEach(function () { server.restore(); });

  beforeEach(function () {
    clothingItems = new App.ClothingItemCollection();
  });

  describe('#fetch', function () {
    it('grabs the data from the proper url', function () {
      clothingItems.fetch();
      expect(server.requests[0].url).to.equal('/clothing_items.json');
    });

    it('sorts it by name in ascending order', function () {
      clothingItems.fetch();

      server.requests[0].respond(
        200,
        { 'Content-Type': 'application/json' },
        MagicLamp.rawJson('clothing_items/index')
      );

      var expectedNames = ['Marmot ROM Jacket', 'Uniqlo Down Jacket'];
      expect(clothingItems.pluck('name')).to.deep.equal(expectedNames);
    });
  });
});
