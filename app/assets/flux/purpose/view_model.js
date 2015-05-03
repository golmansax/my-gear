//= require ./index
//= require ./attributes

App.Purpose.ViewModel = (function () {
  'use strict';

  var PurposeViewModel = Immutable.Record(App.Purpose.Attributes);

  return PurposeViewModel;
})();
