//= require purpose/flux/store
//= require brand/flux/store

App.Shared.Header = (function () {
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
