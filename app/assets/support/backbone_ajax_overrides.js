(function () {
  'use strict';

  var originalAjax = Backbone.ajax;

  Backbone.ajax = function (options) {
    var defaultHeaders = { 'X-Requested-With': 'XMLHttpRequest' };
    options.headers = _(defaultHeaders).extend(options.headers || {});

    return originalAjax(options);
  }
})();
