define([
  'bower/react', 'bower/react_router', 'components/bootstrap_nav_item'
], function (React, Router, BootstrapNavItem) {
  'use strict';

  return React.createFactory(React.createBackboneClass({
    componentDidMount: function () {
      this.getCollection().fetch();
    },
    createEntry: function (entry) {
      var modelAttributes = entry.attributes;
      var myId = modelAttributes.id;
      var itemAttrs = {
        to: 'outfit',
        params: { id: myId },
        key: 'outfit/' + myId
      };

      return BootstrapNavItem(itemAttrs, modelAttributes.name);
    },
    render: function () {
      return React.DOM.div({ className: 'navbar navbar-default' },
        React.DOM.div({ className: 'container' },
          React.DOM.div({ className: 'navbar-header' },
            Router.Link({ className: 'navbar-brand', to: '/' }, 'HOME')
          ),
          React.DOM.ul({ className: 'navbar-nav nav' },
            this.getCollection().map(this.createEntry)
          )
        )
      );
    }
  }));
});
