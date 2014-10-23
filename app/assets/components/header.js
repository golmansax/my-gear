define([
  'bower/react', 'bower/react_router', 'components/bootstrap_nav_item'
], function (React, Router, BootstrapNavItem) {
  'use strict';

  return React.createBackboneClass({
    componentDidMount: function () {
      this.getCollection().fetch();
    },
    createEntry: function (entry) {
      var myId = entry.get('id');

      return new BootstrapNavItem({ to: 'outfit', params: { outfitId: myId }},
        entry.get('name')
      );
    },
    render: function () {
      return React.DOM.div({ className: 'navbar navbar-default' },
        React.DOM.div({ className: 'container' },
          React.DOM.div({ className: 'navbar-header' },
            new Router.Link({ className: 'navbar-brand', to: '/' }, 'HOME')
          ),
          React.DOM.ul({ className: 'navbar-nav nav' },
            this.getCollection().map(this.createEntry)
          )
        )
      );
    }
  });
});
