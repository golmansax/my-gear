App.GraphQl = (function () {
  'use strict';

  return {
    query: function (query) {
      return reqwest({
        url: '/graph_ql',
        method: 'post',
        type: 'json',
        data: { query: query.replace(/\s/g, '') }
      });
    }
  };
})();
