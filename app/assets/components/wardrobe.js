define(['bower/react'], function (React) {
  'use strict';

  return React.createBackboneClass({
    componentDidMount: function () {
      this.getCollection().fetch();
    },
    createEntry: function (entry) {
      return React.DOM.div({ key: entry.get('id') },
        entry.get('brand') + ' ' + entry.get('model')
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
