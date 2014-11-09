define([
  'support/test_utils', 'components/outfit_view', 'models/outfit'
], function (TestUtils, OutfitView, Outfit) {
  'use strict';

  describe('components/outfit_view', function () {
    var outfit;

    beforeEach(function () {
      this.fixtures = fixture.load('outfit.json');
      outfit = new Outfit(fixture.json[0], { parse: true });
    });

    it('renders', function () {
      TestUtils.renderIntoDocument(new OutfitView(outfit));
    });
  });
});
