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
        to: type,
        params: { id: item.id }
      };

      return (
        <ReactBootstrap.MenuItem key={item.id}>
          <ReactRouter.Link {...itemAttrs}>
            {item.name}
          </ReactRouter.Link>
        </ReactBootstrap.MenuItem>
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
            <ReactRouterBootstrap.NavItemLink to='about'>
              About
            </ReactRouterBootstrap.NavItemLink>
            <ReactRouterBootstrap.NavItemLink to='essentials'>
              Essentials
            </ReactRouterBootstrap.NavItemLink>
            <ReactRouterBootstrap.NavItemLink to='non-essentials'>
              Non-Essentials
            </ReactRouterBootstrap.NavItemLink>
            <ReactRouterBootstrap.NavItemLink to='watch-list'>
              Watch List
            </ReactRouterBootstrap.NavItemLink>
            <ReactRouterBootstrap.NavItemLink to='recent-purchases'>
              Recent Purchases
            </ReactRouterBootstrap.NavItemLink>
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
