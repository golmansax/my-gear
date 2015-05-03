//= require ./index
//= require views/shared/router_nav_item
//= require flux/purpose/store

App.Layout.Header = (function () {
  'use strict';

  return React.createClass({
    mixins: [React.BindMixin(App.Purpose.Store, 'getStateFromStore')],

    getStateFromStore: function () {
      return {
        purposes: App.Purpose.Store.getAll()
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
            <ReactBootstrap.DropdownButton title='Purposes'>
              {this._renderPurposes()}
            </ReactBootstrap.DropdownButton>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar>
      );
    }
  });
})();
