define([
  'bower/backbone_sortable_collection', 'models/clothing_item'
], function (BackboneSortableCollection, ClothingItem) {
  'use strict';

  return BackboneSortableCollection.extend({
    model: ClothingItem,
    url: '/clothing_items',

    defaultSort: { name: 'name', dir: 'desc' },
    comparators: {
      name: function (clothingItem) { return clothingItem.get('name'); }
    }
  });
});
