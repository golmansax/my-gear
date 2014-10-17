define([
  'objects/window', 'react', 'collections/clothing_item_list',
  'components/sample_view', 'initializers/index'
], function (window, React, ClothingItemList, SampleView) {
  'use strict';

  var clothingItems = new ClothingItemList();
  clothingItems.fetch();
  var viewAttrs = { collection: { clothingItems: clothingItems } };
  var reactContainer = window.document.getElementById('react-container');

  React.renderComponent(new SampleView(viewAttrs), reactContainer);
});
