define([
  'bower/react', 'bower/underscore', 'bower/moment'
], function (React, _, moment) {
  'use strict';

  return _(React.PropTypes).extend({
    moment: React.PropTypes.instanceOf(moment.fn.constructor)
  });
});
