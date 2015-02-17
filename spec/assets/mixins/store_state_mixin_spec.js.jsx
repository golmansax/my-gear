//= require mixins/store_state_mixin

describe('mixins/store_state_mixin', function () {
  'use strict';

  var Component;

  it('throws an error if stateFromStores is not defined', function () {
    Component = React.createClass({
      mixins: [App.StoreStateMixin],
      render: function () {
      }
    });

    expect(function () {
      TestUtils.renderIntoDocument(<Component />);
    }).to.throw('You must define stateFromStores');
  });
});
