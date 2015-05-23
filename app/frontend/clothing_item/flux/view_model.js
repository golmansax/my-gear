//= require ../index
//= require ./attributes

App.ClothingItem.ViewModel = (function () {
  'use strict';

  var ClothingItemViewModel = Immutable.Record(App.ClothingItem.Attributes);
  return ClothingItemViewModel;
})();
