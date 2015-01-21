//= require models/clothing_item

describe('models/clothing_item', function () {
  'use strict';

  var clothingItem;
  var server;

  before(function () { server = sinon.fakeServer.create(); });
  after(function () { server.restore(); });

  beforeEach(function () {
    clothingItem = new App.ClothingItem({
      id: '77',
      brand: 'Uniqlo',
      model: 'Down Jacket',
      firstPurchaseDate: '2014-10-30'
    }, { parse: true });
  });

  describe('#parse', function () {
    it('adds name to the attributes', function () {
      expect(clothingItem.get('name')).to.equal('Uniqlo Down Jacket');
    });

    it('makes firstPurchaseDate a moment', function () {
      var firstPurchaseDate = clothingItem.get('firstPurchaseDate');
      expect(firstPurchaseDate).to.be.instanceOf(moment.fn.constructor);
    });
  });

  describe('#isValid', function () {
    it('returns false when name is empty', function () {
      expect(new App.ClothingItem().isValid()).to.be.false();
    });

    it('returns true when name is present', function () {
      console.log(expect(new App.ClothingItem().isValid()));
      console.log(expect(new App.ClothingItem().isValid()).to);
      console.log(expect(new App.ClothingItem().isValid()).to.be);
      console.log(expect(new App.ClothingItem().isValid()).to.be.false);
      expect(clothingItem.isValid()).to.be.true();
    });
  });

  describe('#fetch', function () {
    it('grabs the data from the proper url', function () {
      clothingItem.fetch();
      expect(server.requests[0].url).to.equal('/clothing_items/77.json');
    });
  });
});
