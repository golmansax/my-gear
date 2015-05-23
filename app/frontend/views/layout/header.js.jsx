//= require ./index
//= require views/shared/router_nav_item
//= require flux/purpose/store
//= require brand/flux/store

App.Layout.Header = (function () {
  'use strict';

  return React.createClass({
    mixins: [
      React.BindMixin(App.Purpose.Store, 'getPurposeStateFromStore'),
      React.BindMixin(App.Brand.Store, 'getBrandStateFromStore')
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
        <li key={item.id}>
          <ReactRouter.Link {...itemAttrs}>
            {item.name}
          </ReactRouter.Link>
        </li>
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
              HOME
            </ReactRouter.Link>
          </div>
          <ReactBootstrap.Nav>
            <App.Shared.RouterNavItem to='about'>
              About
            </App.Shared.RouterNavItem>
            <App.Shared.RouterNavItem to='essentials'>
              Essentials
            </App.Shared.RouterNavItem>
            <App.Shared.RouterNavItem to='non-essentials'>
              Non-Essentials
            </App.Shared.RouterNavItem>
            <App.Shared.RouterNavItem to='watch-list'>
              Watch List
            </App.Shared.RouterNavItem>
            <App.Shared.RouterNavItem to='recent-purchases'>
              Recent Purchases
            </App.Shared.RouterNavItem>
            <ReactBootstrap.DropdownButton title='Brands'>
              {this._renderBrands()}
            </ReactBootstrap.DropdownButton>
            <ReactBootstrap.DropdownButton title='Purposes'>
              {this._renderPurposes()}
            </ReactBootstrap.DropdownButton>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar>
      );
    }
  });
})();
