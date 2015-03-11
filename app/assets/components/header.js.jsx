//= require components/router_nav_item
//= require stores/outfit_store

App.Header = (function () {
  'use strict';

  return React.createClass({
    mixins: [React.BindMixin(App.OutfitStore, 'getStateFromStore')],

    getStateFromStore: function () {
      return {
        outfits: App.OutfitStore.getAll()
      };
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
