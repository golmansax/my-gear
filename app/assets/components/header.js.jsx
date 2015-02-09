//= require components/router_nav_item
//= require getters/outfit_getters
//= require mixins/store_state_mixin

App.Header = (function () {
  'use strict';

  return React.createClass({
    mixins: [App.StoreStateMixin],

    stateFromStores: {
      clothingItems: App.OutfitGetters.GET_ALL
    },

    _renderEntry: function (entry) {
      var itemAttrs = {
        to: 'outfit',
        params: { id: entry.id }
      };

      return (
        <li key={'outfit/' + entry.id}>
          <ReactRouter.Link {...itemAttrs}>
            {entry.name}
          </ReactRouter.Link>
        </li>
      );
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
            <App.RouterNavItem to='list'>List</App.RouterNavItem>
            <App.RouterNavItem to='wardrobe'>Wardrobe</App.RouterNavItem>
            <ReactBootstrap.DropdownButton title='Outfits'>
              {this.state.outfits.map(this._renderEntry)}
            </ReactBootstrap.DropdownButton>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar>
      );
    }
  });
})();
