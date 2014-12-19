define([
  'bower/react', 'bower/react_router', 'components/router_nav_item',
  'bower/react_bootstrap'
], function (React, Router, RouterNavItem, ReactBootstrap) {
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
          <Router.Link {...itemAttrs}>{modelAttributes.name}</Router.Link>
        </li>
      );
    },
    render: function () {
      return (
        <ReactBootstrap.Navbar>
          <div className='navbar-header'>
            <Router.Link className='navbar-brand' to='/'>HOME</Router.Link>
          </div>
          <ReactBootstrap.Nav>
            <RouterNavItem to='about'>About</RouterNavItem>
            <ReactBootstrap.DropdownButton title='Outfits'>
              {this.getCollection().map(this.createEntry)}
            </ReactBootstrap.DropdownButton>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar>
      );
    }
  });
});