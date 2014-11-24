define([
  'components/header', 'support/test_utils', 'bower/react_router',
  'bower/underscore', 'bower/react_bootstrap', 'bower/react'
], function (Header, TestUtils, Router, _, ReactBootstrap, React) {
  'use strict';

  describe('components/header', function () {
    beforeEach(function () {
      this.outfitsMock = [{ attributes: { id: 'sexy', name: 'Sexy' } }];
      _(this.outfitsMock).extend({ fetch: sinon.stub(), on: sinon.stub() });

      this.header = TestUtils.renderIntoDocument(
        <Header collection={this.outfitsMock} />
      );
    });

    it('fetches the collection', function () {
      expect(this.outfitsMock.fetch.called).to.be.true();
    });

    it('has a Router.Link for each outfit', function () {
      var dropdownButton = TestUtils.findRenderedComponentWithType(
        this.header,
        ReactBootstrap.DropdownButton
      );

      expect(TestUtils.findRenderedComponentWithType(
        dropdownButton,
        Router.Link
      )).to.be.ok();
    });
  });
});
