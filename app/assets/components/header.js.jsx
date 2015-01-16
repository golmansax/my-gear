//= require components/router_nav_item

App.Header = (function () {
  'use strict';

  return React.createBackboneClass({
    componentDidMount: function () {
      this.getCollection().fetch();
    },
    createEntry: function (entry) {
      var modelAttributes = entry.attributes;
      var myId = modelAttributes.id;
      var itemAttrs = {
        to: 'outfit',
        params: { id: myId }
      };

      return (
        <li key={'outfit/' + myId}>
          <ReactRouter.Link {...itemAttrs}>
            {modelAttributes.name}
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
              {this.getCollection().map(this.createEntry)}
            </ReactBootstrap.DropdownButton>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar>
      );
    }
  });
})();
