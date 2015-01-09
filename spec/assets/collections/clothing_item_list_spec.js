define([
  'collections/clothing_item_list', 'support/magic_lamp'
], function (ClothingItemList, MagicLamp) {
  'use strict';

  describe('collections/clothing_item_list', function () {
    var clothingItems;
    var server;

    beforeEach(function () { server = sinon.fakeServer.create(); });
    afterEach(function () { server.restore(); });

    beforeEach(function () {
      clothingItems = new ClothingItemList();
    });

    describe('#fetch', function () {
      it('grabs the data from the proper url', function () {
        clothingItems.fetch();
        expect(server.requests[0].url).to.equal('/clothing_items');
      });

      it('sorts it by name in descending order', function () {
        clothingItems.fetch();

        var fixture = MagicLamp.rawJson('clothing_items/index');
        server.requests[0].respond(200, 'application/json', fixture);

        var expectedNames = ['Uniqlo Down Jacket', 'Marmot ROM Jacket'];
        expect(clothingItems.pluck('name')).to.deep.equal(expectedNames);
      });
    });
  });
});
