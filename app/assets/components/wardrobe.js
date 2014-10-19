define(['bower/react', 'bower/react_router'], function (React, Router) {
  'use strict';

  return React.createBackboneClass({
    componentDidMount: function () {
      this.getCollection().fetch();
    },
    createEntry: function (entry) {
      var myId= entry.get('id');

      return React.DOM.div({ key: myId },
        Router.Link({ to: 'clothing_item', params: { clothingItemId: myId }},
          entry.get('brand') + ' ' + entry.get('model')
        )
      );
    },
    render: function () {
      return React.DOM.div(null,
        'WARDROBE',
        this.getCollection().map(this.createEntry)
      );
    }
  });
});
