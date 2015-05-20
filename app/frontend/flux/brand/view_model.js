//= require ./index
//= require ./attributes

App.Brand.ViewModel = (function () {
  'use strict';

  var BrandViewModel = Immutable.Record(App.Brand.Attributes);

  return BrandViewModel;
})();
