define([
  'components/router_nav_item', 'support/test_utils'
], function (RouterNavItem, TestUtils) {
  'use strict';

  describe('components/bootstrap_nav_item', function () {
    var itemAttrs = {
      to: 'sf',
      params: { road: '101' }
    };

    it('has .active CSS class if it is the active route', function () {
      var navItem = TestUtils.renderIntoDocument(RouterNavItem(itemAttrs));
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
      var navItem = TestUtils.renderIntoDocument(RouterNavItem(itemAttrs));
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
