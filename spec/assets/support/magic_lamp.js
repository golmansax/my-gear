define(['objects/window', 'bower/underscore'], function (window, _) {
  'use strict';

  var MagicLamp = window.MagicLamp;

  MagicLamp.preload();

  afterEach(function () { MagicLamp.clean(); });

  return _(MagicLamp).extend({
    json: function (path) {
      var cached_partial = MagicLamp.genie.cache[path];

      if (!cached_partial) {
        throw 'The following path has not been loaded yet: ' + path;
      }

      return JSON.parse(cached_partial);
    }
  });
});
