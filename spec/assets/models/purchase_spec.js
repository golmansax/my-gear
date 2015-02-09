//= require models/purchase

describe('models/purchase', function () {
  'use strict';

  var purchase;
  var server;

  before(function () { server = sinon.fakeServer.create(); });
  after(function () { server.restore(); });

  beforeEach(function () {
    purchase = new App.Purchase({
      id: '77',
      date: '2014-10-30'
    }, { parse: true });
  });

  describe('#parse', function () {
    it('makes date a moment', function () {
      var date = purchase.get('date');
      expect(date).to.be.instanceOf(moment.fn.constructor);
    });
  });

  describe('#fetch', function () {
    it('grabs the data from the proper url', function () {
      purchase.fetch();
      expect(server.requests[0].url).to.equal('/purchases/77');
    });
  });
});