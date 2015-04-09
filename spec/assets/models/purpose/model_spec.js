//= require models/purpose/model

describe('models/purpose/model', function () {
  'use strict';

  var purpose;
  var server;

  before(function () { server = sinon.fakeServer.create(); });
  after(function () { server.restore(); });

  beforeEach(function () {
    purpose = new App.Purpose.Model({ id: '77' });
  });

  describe('default attributes', function () {
    it('sets clothingItemIds to []', function () {
      expect(purpose.get('clothingItemIds')).to.deep.equal([]);
    });
  });

  describe('#fetch', function () {
    it('grabs the data from the proper url', function () {
      purpose.fetch();
      expect(server.requests[0].url).to.equal('/purposes/77');
    });
  });
});
