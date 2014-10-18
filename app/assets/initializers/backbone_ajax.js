define(['bower/backbone', 'bower/reqwest'], function (Backbone, reqwest) {
  'use strict';

  Backbone.ajax = reqwest.compat;
});
