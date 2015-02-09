App.Getter = (function () {
  'use strict';

  var Getter = function (attrs) {
    _(this).extend(attrs);
  };

  _(Getter.prototype).extend({
    Store: null,
    get: null
  });

  return Getter;
})();
