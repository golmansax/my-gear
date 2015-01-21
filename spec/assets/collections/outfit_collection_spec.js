//= require collections/outfit_collection

describe('collections/outfit_collection', function () {
  'use strict';

  var outfits;
  var server;

  before(function () { server = sinon.fakeServer.create(); });
  after(function () { server.restore(); });

  beforeEach(function () {
    outfits = new App.OutfitCollection();
  });

  describe('#fetch', function () {
    it('grabs the data from the proper url', function () {
      outfits.fetch();
      expect(server.requests[0].url).to.equal('/outfits.json');
    });
  });
});
