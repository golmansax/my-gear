//= require chai/chai
//= require require
//= require support/bind-poly

window.expect = window.chai.expect;

require.config({
 map: {
   '*': {
     'react': 'react-with-addons'
   }
 },
 shim: {
   'react-router': ['initializers/expose_react_hack']
 }
});
