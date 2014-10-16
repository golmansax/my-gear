require([
  'window', 'backbone', 'react', 'clothing_item_list', 'sample_view',
  'backbone_mixin'
], function (window, Backbone, React, ClothingItemList, SampleView) {
  'use strict';

  var clothingItems = new ClothingItemList();
  var sampleView = new SampleView({ clothingItems: clothingItems });
  var reactContainer = window.document.getElementById('react-container');

  React.renderComponent(sampleView, reactContainer);
});
