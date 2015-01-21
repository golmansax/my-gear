//= require bower_components/react/react
//= require bower_components/moment/moment
/* global PropTypes */

var PropTypes = _(React.PropTypes).extend({
  moment: React.PropTypes.instanceOf(moment.fn.constructor)
});
