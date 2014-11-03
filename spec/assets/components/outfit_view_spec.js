define([
  'support/test_utils', 'components/outfit_view'
], function (TestUtils, OutfitView, Outfit) {
  'use strict';

  describe('components/outfit_view', function () {
    it('renders', function () {
      TestUtils.renderIntoDocument(new OutfitView({
        name: 'Sexy',
        clothingItems: []
      }));

      expect(true).to.equal(true);
    });
  });
});
