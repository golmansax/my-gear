define(['bower/react', 'bower/moment'], function (React, moment) {
  'use strict';

  return _(React.PropTypes).extend({
    moment: React.PropTypes.instanceOf(moment.fn.constructor)
  });
});
