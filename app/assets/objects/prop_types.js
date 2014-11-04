define(['bower/react', 'bower/moment'], function () {
  'use strict';

  return _(React.PropTypes).extend({
    moment: React.PropTypes.instanceOf(moment.fn.constructor)
  });
});
