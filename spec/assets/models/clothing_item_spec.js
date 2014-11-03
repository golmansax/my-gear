define([
  'models/clothing_item', 'bower/moment'
], function (ClothingItem, moment) {

  'use strict';

  describe('models/clothing_item', function () {
    var clothingItem;

    beforeEach(function () {
      clothingItem = new ClothingItem({
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
        expect(firstPurchaseDate).to.be.instanceof(moment.fn.constructor);
      });
    });

    describe('#isValid', function () {
      it('returns false when name is empty', function () {
        expect(new ClothingItem().isValid()).to.be.false;
      });

      it('returns true when name is present', function () {
        expect(clothingItem.isValid()).to.be.true;
      });
    });
  });
});
