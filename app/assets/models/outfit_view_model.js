App.OutfitViewModel = (function () {
  'use strict';

  var OutfitViewModel = Immutable.Record({
    id: null,
    name: '',
    clothingItemIds: []
  });

  return OutfitViewModel;
})();
