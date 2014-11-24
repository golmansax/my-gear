define([
  'support/test_utils', 'components/clothing_item_view', 'models/clothing_item',
  'support/magic_lamp', 'bower/react'
], function (TestUtils, ClothingItemView, ClothingItem, MagicLamp, React) {
  'use strict';

  describe('components/clothing_item_view', function () {
    beforeEach(function () {
      var fixture = MagicLamp.json('clothing_items/show');
      this.clothingItem = new ClothingItem(fixture, { parse: true });
    });

    it('renders', function () {
      TestUtils.renderIntoDocument(
        <ClothingItemView {...this.clothingItem.attributes} />
      );
    });
  });
});
