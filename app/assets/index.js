define([
  'objects/window', 'bower/react', 'collections/clothing_item_list', 'components/manager', 'initializers/index'
], function (window, React, ClothingItemList, Manager) {
  'use strict';

  var clothingItems = new ClothingItemList();
  clothingItems.fetch();

  var reactContainer = window.document.getElementById('react-container');
  React.renderComponent(new Manager({ collection: clothingItems }), reactContainer);
});
