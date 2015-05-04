//= require flux/clothing_item/model

describe('flux/clothing_item/model', function () {
  'use strict';

  var clothingItem;
  var server;

  before(function () { server = sinon.fakeServer.create(); });
  after(function () { server.restore(); });

  beforeEach(function () {
    clothingItem = new App.ClothingItem.Model({
      id: '77',
      brand: 'Uniqlo',
      model: 'Down Jacket'
    }, { parse: true });
  });

  describe('#isValid', function () {
    it('returns false when brand is empty', function () {
      expect(new App.ClothingItem.Model().isValid()).to.be.false();
    });

    it('returns true when brand is present', function () {
      expect(clothingItem.isValid()).to.be.true();
    });
  });

  describe('#fetch', function () {
    it('grabs the data from the proper url', function () {
      clothingItem.fetch();
      expect(server.requests[0].url).to.equal('/clothing_items/77');
    });
  });
});
