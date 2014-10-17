define([
  'window', 'react', 'clothing_item_list', 'sample_view', 'initializers'
], function (window, React, ClothingItemList, SampleView) {
  'use strict';

  var clothingItems = new ClothingItemList();
  clothingItems.fetch();
  var viewAttrs = { collection: { clothingItems: clothingItems } };
  var reactContainer = window.document.getElementById('react-container');

  React.renderComponent(new SampleView(viewAttrs), reactContainer);
});
