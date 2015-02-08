//= require components/router_nav_item
//= require stores/outfit_store
//= require mixins/store_watch_mixin

App.Header = (function () {
  'use strict';

  return React.createClass({
    mixins: [App.StoreWatchMixin(App.OutfitStore, '_onChange')],

    getInitialState: function () {
      return this._getStateFromStore();
    },

    _onChange: function () {
      this.setState(this._getStateFromStore());
    },

    _getStateFromStore: function () {
      return { outfits: App.OutfitStore.getAll() };
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
