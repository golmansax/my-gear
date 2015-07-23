//= require magic_lamp
/* global window */

var MagicLamp = (function (OldMagicLamp) {
  'use strict';

  OldMagicLamp.json = function (path) {
    var cachedPartial = MagicLamp.genie.cache[path];

    if (!cachedPartial) {
      throw 'The following path has not been loaded yet: ' + path;
    }

    return window.JSON.parse(cachedPartial);
  };

  OldMagicLamp.rawJson = function (path) {
    var cachedPartial = MagicLamp.genie.cache[path];

    if (!cachedPartial) {
      throw 'The following path has not been loaded yet: ' + path;
    }

    return cachedPartial;
  };

  return OldMagicLamp;
})(MagicLamp);
