define(['models/outfit', 'bower/sinon'], function (Outfit, sinon) {
  'use strict';

  describe('models/outfit', function () {
    var outfit;
    var server;

    before(function () { server = sinon.fakeServer.create(); });
    after(function () { server.restore(); });

    beforeEach(function () {
      outfit = new Outfit({ id: '77' });
    });

    describe('#fetch', function () {
      it('grabs the data from the proper url', function () {
        outfit.fetch();
        expect(server.requests[0].url).to.equal('/outfits/77');
      });
    });
  });
});
