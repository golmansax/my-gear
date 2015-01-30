App.Utils = (function () {
  'use strict';

  return {
    capitalize: function (string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  };
})();
