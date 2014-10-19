define(['bower/react', 'bower/react_router'], function (React, Router) {
  'use strict';

  return React.createBackboneClass({
    componentDidMount: function () {
      this.getCollection().fetch();
    },
    createEntry: function (entry) {
      var myId = entry.get('id');

      return new Router.Link({ to: 'outfit', params: { outfitId: myId }},
        entry.get('name')
      );
    },
    render: function () {
      return React.DOM.div(null,
        'HEADER',
        new Router.Link({ to: '/' }, 'HOME'),
        this.getCollection().map(this.createEntry)
      );
    }
  });
});
