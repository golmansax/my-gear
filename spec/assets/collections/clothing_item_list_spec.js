define([
  'collections/clothing_item_list', 'bower/sinon'
], function (ClothingItemList, sinon) {
  'use strict';

  describe('collections/clothing_item_list', function () {
    var clothingItems;
    var server;

    before(function () { server = sinon.fakeServer.create(); });
    after(function () { server.restore(); });

    beforeEach(function () {
      clothingItems = new ClothingItemList();
    });

    describe('#fetch', function () {
      it('grabs the data from the proper url', function () {
        clothingItems.fetch();
        expect(server.requests[0].url).to.equal('/clothing_items');
      });
    });
  });
});
