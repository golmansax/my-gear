//= require bower_components/backbone/backbone
//= require bower_components/backbone-sortable-collection/lib/backbone_sortable_collection
//
//= require bower_components/react/react
//= require bower_components/react.backbone/react.backbone
//= require bower_components/react-bootstrap/react-bootstrap
//= require bower_components/react-router/dist/react-router
//
//= require bower_components/moment/moment
//
//= require_self
//= require router_bootstrap

var App = {};

var PropTypes = _(React.PropTypes).extend({
  moment: React.PropTypes.instanceOf(moment.fn.constructor)
});
