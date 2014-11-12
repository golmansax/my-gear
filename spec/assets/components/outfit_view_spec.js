define([
  'support/test_utils', 'components/outfit_view', 'models/outfit',
  'support/magic_lamp', 'bower/react_router'
], function (TestUtils, OutfitView, Outfit, MagicLamp, Router) {
  'use strict';

  describe('components/outfit_view', function () {
    var outfit;

    beforeEach(function () {
      var fixture = MagicLamp.json('outfits/show');
      outfit = new Outfit(fixture, { parse: true });
    });

    it('renders a Router Link for each clothing item', function () {
      var outfitView = TestUtils.renderIntoDocument(
        OutfitView(outfit.attributes)
      );

      expect(TestUtils.findRenderedComponentWithType(
        outfitView,
        Router.Link
      )).to.be.ok();
    });
  });
});
