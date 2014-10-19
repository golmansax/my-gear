define(['bower/react', 'bower/react_router'], function (React, Router) {
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
        React.DOM.div({ key: clothingItem.id },
          Router.Link({ to: 'clothing_item', params: { clothingItemId: clothingItem.id }},
            clothingItem.brand + ' ' + clothingItem.model
          )
        )
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
