//= require purpose/flux/store
//= require brand/flux/store

App.Shared.Header = (function () {
  'use strict';

  return React.createClass({
    mixins: [
      React.BindMixin(App.Purpose.Store, 'getPurposeStateFromStore'),
      React.BindMixin(App.Brand.Store, 'getBrandStateFromStore'),
      React.PureRenderMixin
    ],

    getPurposeStateFromStore: function () {
      return {
        purposes: App.Purpose.Store.getAll()
      };
    },

    getBrandStateFromStore: function () {
      return {
        brands: App.Brand.Store.getAll()
      };
    },

    _renderBrand: function (brand) {
      return this._renderListItem('brand', brand);
    },

    _renderPurpose: function (purpose) {
      return this._renderListItem('purpose', purpose);
    },

    _renderListItem: function (type, item) {
      var itemAttrs = {
        to: '/' + type + 's/' + item.id,
        key: type + '-' + item
      };

      return (
        <ReactRouterBootstrap.LinkContainer {...itemAttrs}>
          <ReactBootstrap.MenuItem key={item.id}>
            {item.name}
          </ReactBootstrap.MenuItem>
        </ReactRouterBootstrap.LinkContainer>
      );
    },

    _renderBrands: function () {
      if (this.state.brands.isLoading) {
        return;
      }

      return this.state.brands.valueSeq().map(this._renderBrand).toJS();
    },

    _renderPurposes: function () {
      if (this.state.purposes.isLoading) {
        return;
      }

      return this.state.purposes.valueSeq().map(this._renderPurpose).toJS();
    },

    render: function () {
      return (
        <ReactBootstrap.Navbar>
          <div className='navbar-header'>
            <ReactRouter.Link className='navbar-brand' to='/'>
              My Gear
            </ReactRouter.Link>
          </div>
          <ReactBootstrap.Nav>
            <ReactRouterBootstrap.LinkContainer to='/about'>
              <ReactBootstrap.NavItem>
                About
              </ReactBootstrap.NavItem>
            </ReactRouterBootstrap.LinkContainer>
            <ReactRouterBootstrap.LinkContainer to='/essentials'>
              <ReactBootstrap.NavItem>
                Essentials
              </ReactBootstrap.NavItem>
            </ReactRouterBootstrap.LinkContainer>
            <ReactRouterBootstrap.LinkContainer to='/non-essentials'>
              <ReactBootstrap.NavItem>
                Non-Essentials
              </ReactBootstrap.NavItem>
            </ReactRouterBootstrap.LinkContainer>
            <ReactRouterBootstrap.LinkContainer to='/wish-list'>
              <ReactBootstrap.NavItem>
                Wish List
              </ReactBootstrap.NavItem>
            </ReactRouterBootstrap.LinkContainer>
            <ReactRouterBootstrap.LinkContainer to='/recent-purchases'>
              <ReactBootstrap.NavItem>
                Recent Purchases
              </ReactBootstrap.NavItem>
            </ReactRouterBootstrap.LinkContainer>
            <ReactBootstrap.NavDropdown
              title='Brands'
              id='header-brands-dropdown'
              >
              {this._renderBrands()}
            </ReactBootstrap.NavDropdown>
            <ReactBootstrap.NavDropdown
              title='Purposes'
              id='header-purposes-dropdown'
              >
              {this._renderPurposes()}
            </ReactBootstrap.NavDropdown>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar>
      );
    }
  });
})();
