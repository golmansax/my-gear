//= require magic_lamp

var MagicLamp = (function (OldMagicLamp) {
  'use strict';

  return _(OldMagicLamp).extend({
    json: function (path) {
      var cachedPartial = MagicLamp.genie.cache[path];

      if (!cachedPartial) {
        throw 'The following path has not been loaded yet: ' + path;
      }

      return window.JSON.parse(cachedPartial);
    },

    rawJson: function (path) {
      var cachedPartial = MagicLamp.genie.cache[path];

      if (!cachedPartial) {
        throw 'The following path has not been loaded yet: ' + path;
      }

      return cachedPartial;
    }
  });
})(MagicLamp);
