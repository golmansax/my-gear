//= require chai/chai
//= require require
//= require support/phantomjs-shims

/* global window */
window.expect = window.chai.expect;

require.config({
 map: {
   '*': {
     'react': 'react-with-addons',
     'bower/react_router': 'support/react_router_mock'
   }
 },
 urlArgs: '&instrument=1',
 shim: {
   'react-router': ['initializers/expose_react_hack']
 }
});
