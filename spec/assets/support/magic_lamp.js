define(['objects/window'], function (window) {
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
