//= require ./index
//= require ./attributes

App.Outfit.ViewModel = (function () {
  'use strict';

  var OutfitViewModel = Immutable.Record(App.Outfit.Attributes);

  return OutfitViewModel;
})();
