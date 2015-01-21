//= require components/router_nav_item

describe('components/router_nav_item', function () {
  'use strict';

  beforeEach(function () {
    var itemAttrs = {
      to: 'sf',
      params: { road: '101' }
    };

    this.navItem = TestUtils.renderIntoDocument(
      <App.RouterNavItem {...itemAttrs} />
    );
    this.sandbox.stub(this.navItem, 'getParams').returns({ road: '101' });
  });

  it('has .active CSS class if it is the active route', function () {
    var isActiveStub = this.sandbox.stub(
      this.navItem,
      'isActive'
    ).returns(true);
    this.navItem.forceUpdate();

    expect(isActiveStub).to.have.been.calledWith('sf', { road: '101' });
    expect(TestUtils.findRenderedDOMComponentWithClass(
      this.navItem,
      'active'
    )).to.be.ok();
  });

  it('does not have .active CSS class if it is not active', function () {
    var isActiveStub = this.sandbox.stub(
      this.navItem,
      'isActive'
    ).returns(false);
    this.navItem.forceUpdate();

    expect(isActiveStub).to.have.been.calledWith('sf', { road: '101' });
    expect(TestUtils.scryRenderedDOMComponentsWithClass(
      this.navItem,
      'active'
    )).to.have.length(0);
  });
});
