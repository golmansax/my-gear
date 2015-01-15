define([
  'bower/backbone_sortable_collection', 'models/clothing_item'
], function (BackboneSortableCollection, ClothingItem) {
  'use strict';

  var USAGE_ORDER = ['heavy', 'moderate', 'specialized'];

  return BackboneSortableCollection.extend({
    model: ClothingItem,
    url: '/clothing_items',

    defaultSort: 'usage',

    comparators: {
      name: 'getter',
      type: 'getter',
      usage: function (clothing_item) {
        var index = _(USAGE_ORDER).indexOf(clothing_item.get('usage'));
        return index >= 0 ? index : USAGE_ORDER.length;
      }
    },

    sorts: {
      usage: ['usage', 'type', 'name'],
      type: ['type', 'name']
    }
  });
});
