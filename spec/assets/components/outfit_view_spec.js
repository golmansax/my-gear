define([
  'support/test_utils', 'components/outfit_view', 'models/outfit'
], function (TestUtils, OutfitView, Outfit) {
  'use strict';

  describe('components/outfit_view', function () {
    it('renders', function () {
      TestUtils.renderIntoDocument(new OutfitView({
        model: new Outfit({})
      }));

      expect(true).to.equal(true);
    });
  });
});
