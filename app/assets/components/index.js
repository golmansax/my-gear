define([
  'window', 'backbone', 'reqwest', 'react', 'clothing_item_list', 'sample_view'
], function (window, Backbone, reqwest, React, ClothingItemList, SampleView) {
  'use strict';

  Backbone.ajax = reqwest.compat;

  var clothingItems = new ClothingItemList();
  clothingItems.fetch();
  var viewAttrs = { collection: { clothingItems: clothingItems } };
  var reactContainer = window.document.getElementById('react-container');

  React.renderComponent(new SampleView(viewAttrs), reactContainer);
});
