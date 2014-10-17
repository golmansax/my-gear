define(['backbone', 'reqwest'], function (Backbone, reqwest) {
  'use strict';

  Backbone.ajax = reqwest.compat;
});
