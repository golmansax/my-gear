//= require chai/chai
//= require require
//= require support/phantomjs-shims

window.expect = window.chai.expect;

require.config({
 map: {
   '*': {
     'react': 'react-with-addons'
   }
 },
 urlArgs: '&instrument=1',
 shim: {
   'react-router': ['initializers/expose_react_hack']
 }
});
