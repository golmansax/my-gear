//= require purpose/flux/collection

describe('purpose/flux/collection', function () {
  'use strict';

  var purposes;
  var server;

  before(function () { server = sinon.fakeServer.create(); });
  after(function () { server.restore(); });

  beforeEach(function () {
    purposes = new App.Purpose.Collection();
  });

  describe('#fetch', function () {
    it('grabs the data from the proper url', function () {
      purposes.fetch();
      expect(server.requests[0].url).to.equal('/purposes');
    });
  });
});
