define([
  'components/header', 'support/test_utils', 'components/router_nav_item',
  'bower/underscore', 'bower/react_bootstrap'
], function (Header, TestUtils, RouterNavItem, _, ReactBootstrap) {
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
      var dropdownButton = TestUtils.findRenderedComponentWithType(
        this.header,
        ReactBootstrap.DropdownButton
      );

      expect(TestUtils.findRenderedComponentWithType(
        dropdownButton,
        RouterNavItem
      )).to.be.ok();
    });
  });
});
