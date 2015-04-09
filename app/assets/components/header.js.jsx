//= require components/router_nav_item
//= require stores/purpose_store

App.Header = (function () {
  'use strict';

  return React.createClass({
    mixins: [React.BindMixin(App.PurposeStore, 'getStateFromStore')],

    getStateFromStore: function () {
      return {
        purposes: App.PurposeStore.getAll()
      };
    },

    _renderPurpose: function (purpose) {
      var itemAttrs = {
        to: 'purpose',
        params: { id: purpose.id }
      };

      return (
        <li key={purpose.id}>
          <ReactRouter.Link {...itemAttrs}>
            {purpose.name}
          </ReactRouter.Link>
        </li>
      );
    },

    _renderPurposes: function () {
      if (this.state.purposes.isLoading) {
        return null;
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
            <App.RouterNavItem to='about'>About</App.RouterNavItem>
            <App.RouterNavItem to='essentials'>Essentials</App.RouterNavItem>
            <App.RouterNavItem to='other'>Non-Essentials</App.RouterNavItem>
            <App.RouterNavItem to='wishlist'>Wishlist</App.RouterNavItem>
            <ReactBootstrap.DropdownButton title='Purposes'>
              {this._renderPurposes()}
            </ReactBootstrap.DropdownButton>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar>
      );
    }
  });
})();
