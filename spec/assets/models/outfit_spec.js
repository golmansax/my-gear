//= require models/outfit

describe('models/outfit', function () {
  'use strict';

  var outfit;
  var server;

  before(function () { server = sinon.fakeServer.create(); });
  after(function () { server.restore(); });

  beforeEach(function () {
    outfit = new App.Outfit({ id: '77' });
  });

  describe('default attributes', function () {
    it('sets clothingItemIds to []', function () {
      expect(outfit.get('clothingItemIds')).to.deep.equal([]);
    });
  });

  describe('#fetch', function () {
    it('grabs the data from the proper url', function () {
      outfit.fetch();
      expect(server.requests[0].url).to.equal('/outfits/77');
    });
  });
});
