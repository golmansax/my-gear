define([
  'bower/react', 'components/router_nav_item', 'support/test_utils'
], function (React, RouterNavItem, TestUtils) {
  'use strict';

  describe('components/router_nav_item', function () {
    beforeEach(function () {
      var itemAttrs = {
        to: 'sf',
        params: { road: '101' }
      };

      this.instance = (
        /* jshint maxlen: false, quotmark: false */
        <RouterNavItem {...itemAttrs} />
        /* jshint maxlen: 80, quotmark: single */
      );
    });

    it('has .active CSS class if it is the active route', function () {
      var navItem = TestUtils.renderIntoDocument(this.instance);
      var isActiveStub = sinon.stub(
        navItem,
        'isActive'
      ).returns(true);
      navItem.forceUpdate();

      expect(isActiveStub).to.have.been.calledWith('sf', { road: '101' });
      expect(TestUtils.findRenderedDOMComponentWithClass(
        navItem,
        'active'
      )).to.be.ok();
    });

    it('does not have .active CSS class if it is not active', function () {
      var navItem = TestUtils.renderIntoDocument(this.instance);
      var isActiveStub = sinon.stub(
        navItem,
        'isActive'
      ).returns(false);
      navItem.forceUpdate();

      expect(isActiveStub).to.have.been.calledWith('sf', { road: '101' });
      expect(TestUtils.scryRenderedDOMComponentsWithClass(
        navItem,
        'active'
      )).to.have.length(0);
    });
  });
});
