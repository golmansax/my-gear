define(['collections/outfit_collection'], function (OutfitCollection) {
  'use strict';

  describe('collections/outfit_collection', function () {
    var outfits;
    var server;

    before(function () { server = sinon.fakeServer.create(); });
    after(function () { server.restore(); });

    beforeEach(function () {
      outfits = new OutfitCollection();
    });

    describe('#fetch', function () {
      it('grabs the data from the proper url', function () {
        outfits.fetch();
        expect(server.requests[0].url).to.equal('/outfits');
      });
    });
  });
});
