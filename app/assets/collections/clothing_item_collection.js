define([
  'bower/backbone_sortable_collection', 'models/clothing_item',
  'bower/underscore'
], function (BackboneSortableCollection, ClothingItem, _) {
  'use strict';

  var USAGE_ORDER = ['heavy', 'moderate', 'specialized'];

  return BackboneSortableCollection.extend({
    model: ClothingItem,
    url: '/clothing_items',

    defaultSort: 'usage',

    comparators: {
      name: 'getter',
      type: 'getter',
      usage: function (clothingItem) {
        var index = _(USAGE_ORDER).indexOf(clothingItem.get('usage'));
        return index >= 0 ? index : USAGE_ORDER.length;
      }
    },

    sorts: {
      usage: ['usage', 'type', 'name'],
      type: ['type', 'name']
    }
  });
});
