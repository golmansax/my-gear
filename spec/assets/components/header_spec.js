define([
  'components/header', 'support/test_utils', 'components/bootstrap_nav_item',
  'bower/underscore'
], function (Header, TestUtils, BootstrapNavItem, _) {
  'use strict';

  describe('components/header', function () {
    beforeEach(function () {
      this.outfitsMock = [{ attributes: { id: 'sexy', name: 'Sexy' } }];
      _(this.outfitsMock).extend({ fetch: sinon.stub(), on: sinon.stub() });

      this.header = TestUtils.renderIntoDocument(
        Header({ collection: this.outfitsMock })
      );
    });

    it('fetches the collection', function () {
      expect(this.outfitsMock.fetch.called).to.be.true();
    });

    it('has a BootstrapNavItem for each outfit', function () {
      expect(TestUtils.findRenderedComponentWithType(
        this.header,
        BootstrapNavItem
      )).to.be.ok();
    });
  });
});
