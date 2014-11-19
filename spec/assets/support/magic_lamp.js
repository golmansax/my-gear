define(['objects/window', 'bower/underscore'], function (window, _) {
  'use strict';

  var MagicLamp = window.MagicLamp;

  MagicLamp.preload();

  afterEach(function () { MagicLamp.clean(); });

  return _(MagicLamp).extend({
    json: function (path) {
      var cachedPartial = MagicLamp.genie.cache[path];

      if (!cachedPartial) {
        throw 'The following path has not been loaded yet: ' + path;
      }

      return JSON.parse(cachedPartial);
    }
  });
});
