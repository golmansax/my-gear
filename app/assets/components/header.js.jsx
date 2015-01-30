//= require components/router_nav_item

App.Header = (function () {
  'use strict';

  return React.createClass({

    getInitialState: function () {
      return { outfits: new App.OutfitCollection() };
    },

    componentWillMount: function () {
      this.state.outfits.on('all', this.forceUpdate.bind(this, null));
    },

    componentDidMount: function () {
      this.state.outfits.fetch();
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
              {this.state.outfits.toJSON().map(this._renderEntry)}
            </ReactBootstrap.DropdownButton>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar>
      );
    }
  });
})();
