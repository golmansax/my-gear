define(['objects/window', 'bower/underscore'], function (window, _) {
  'use strict';

  var MagicLamp = window.MagicLamp;

  MagicLamp.preload();

  afterEach(function () { MagicLamp.clean(); });

  return _(MagicLamp).extend({
    json: function (path) {
      return JSON.parse(MagicLamp.genie.cache[path]);
    }
  });
});
