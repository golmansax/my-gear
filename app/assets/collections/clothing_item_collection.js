define([
  'bower/backbone_sortable_collection', 'models/clothing_item'
], function (BackboneSortableCollection, ClothingItem) {
  'use strict';

  return BackboneSortableCollection.extend({
    model: ClothingItem,
    url: '/clothing_items',

    defaultSort: 'type',

    comparators: { name: 'getter', type: 'getter' },

    sorts: { type: ['type', 'name'] }
  });
});
