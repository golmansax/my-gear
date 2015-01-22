//= require components/router_nav_item

App.Header = (function () {
  'use strict';

  return React.createBackboneClass({
    componentDidMount: function () {
      this.getCollection().fetch();
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
              {this.getCollection().toJSON().map(this._renderEntry)}
            </ReactBootstrap.DropdownButton>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar>
      );
    }
  });
})();
