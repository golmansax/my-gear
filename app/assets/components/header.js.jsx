//= require components/router_nav_item
//= require getters/outfit_getters
//= require mixins/store_state_mixin

App.Header = (function () {
  'use strict';

  return React.createClass({
    mixins: [App.StoreStateMixin],

    stateFromStores: {
      outfits: App.OutfitGetters.GET_ALL
    },

    _renderOutfit: function (outfit) {
      var itemAttrs = {
        to: 'outfit',
        params: { id: outfit.id }
      };

      return (
        <li key={outfit.id}>
          <ReactRouter.Link {...itemAttrs}>
            {outfit.name}
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
              {this.state.outfits.map(this._renderOutfit)}
            </ReactBootstrap.DropdownButton>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar>
      );
    }
  });
})();
