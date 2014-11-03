define([
  'bower/react', 'components/clothing_item_view'
], function (React, ClothingItemView) {
  'use strict';

  return React.createBackboneClass({
    componentDidMount: function () {
      this.getCollection().fetch();
    },
    createEntry: function (entry) {
      return new ClothingItemView(entry.attributes);
    },
    render: function () {
      return React.DOM.div(null,
        'WARDROBE MANAGER',
        React.DOM.div({ className: 'row' },
          this.getCollection().map(this.createEntry)
        )
      );
    }
  });
});
