//= require models/purchase/model

describe('models/purchase/model', function () {
  'use strict';

  var purchase;
  var server;

  before(function () { server = sinon.fakeServer.create(); });
  after(function () { server.restore(); });

  beforeEach(function () {
    purchase = new App.Purchase.Model({
      id: '77',
      date: '2014-10-30'
    }, { parse: true });
  });

  describe('#fetch', function () {
    it('grabs the data from the proper url', function () {
      purchase.fetch();
      expect(server.requests[0].url).to.equal('/purchases/77');
    });
  });
});
