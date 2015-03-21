//= require components/router_nav_item
//= require stores/outfit_store
//= require actions/outfit_actions

App.Header = (function () {
  'use strict';

  return React.createClass({
    mixins: [React.BindMixin(App.OutfitStore, 'getStateFromStore')],

    getStateFromStore: function () {
      return {
        outfits: App.OutfitStore.getAll()
      };
    },

    componentWillMount: function () {
      App.OutfitActions.fetchAll();
      this.setState(this.getStateFromStore());
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

    _renderOutfits: function () {
      if (this.state.outfits.isLoading) {
        return null;
      }

      return this.state.outfits.valueSeq().map(this._renderOutfit).toJS();
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
              {this._renderOutfits()}
            </ReactBootstrap.DropdownButton>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar>
      );
    }
  });
})();
