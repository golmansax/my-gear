//= require models/clothing_item

App.ClothingItemCollection = (function () {
  'use strict';

  var USAGE_ORDER = ['heavy', 'moderate', 'specialized'];

  return Backbone.SortableCollection.extend({
    model: App.ClothingItem,
    url: '/clothing_items',

    defaultSort: 'usage',

    comparators: {
      name: function (clothingItem) {
        return clothingItem.get('brand') + clothingItem.get('model')
      },
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
})();
