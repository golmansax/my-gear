define([
  'bower/react', 'bower/react_router', 'bower/underscore'
], function (React, Router, _) {
  'use strict';

  return React.createBackboneClass({
    componentDidMount: function () {
      this.getModel().fetch();
    },
    createEntry: function (entry) {
      return React.DOM.div(null,
        entry.get('name'),
        this.renderClothingItems(entry.get('clothing_items'))
      );
    },
    renderClothingItems: function (clothingItems) {
      return _(clothingItems).map(function (clothingItem) {
        var linkAttrs = {
          to: 'clothing_item',
          params: { id: clothingItem.id }
        };

        return React.DOM.div({ key: clothingItem.id },
          Router.Link(linkAttrs,
            clothingItem.brand + ' ' + clothingItem.model
          )
        );
      });
    },
    render: function () {
      return React.DOM.div(null,
        'MODEL',
        this.createEntry(this.getModel())
      );
    }
  });
});
