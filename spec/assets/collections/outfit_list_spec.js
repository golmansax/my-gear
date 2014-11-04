define([
  'collections/outfit_list', 'bower/sinon'
], function (OutfitList, sinon) {
  'use strict';

  describe('collections/outfit_list', function () {
    var outfits;
    var server;

    before(function () { server = sinon.fakeServer.create(); });
    after(function () { server.restore(); });

    beforeEach(function () {
      outfits = new OutfitList();
    });

    describe('#fetch', function () {
      it('grabs the data from the proper url', function () {
        outfits.fetch();
        expect(server.requests[0].url).to.equal('/outfits');
      });
    });
  });
});
