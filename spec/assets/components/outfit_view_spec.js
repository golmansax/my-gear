define([
  'support/test_utils', 'components/outfit_view', 'models/outfit',
  'support/magic_lamp'
], function (TestUtils, OutfitView, Outfit, MagicLamp) {
  'use strict';

  describe('components/outfit_view', function () {
    var outfit;

    beforeEach(function () {
      var fixture = MagicLamp.json('outfits/show');
      outfit = new Outfit(fixture, { parse: true });
    });

    it('renders', function () {
      TestUtils.renderIntoDocument(new OutfitView(outfit));
    });
  });
});
