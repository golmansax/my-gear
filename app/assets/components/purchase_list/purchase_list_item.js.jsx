//= require getters/purchase_getters
//= require mixins/store_state_mixin

App.PurchaseListItem = (function () {
  'use strict';

  return React.createClass({
    mixins: [App.StoreStateMixin],

    propTypes: {
      id: PropTypes.number.isRequired
    },

    stateFromStores: {
      purchase: App.PurchaseGetters.FIND_BY_ID
    },

    render: function () {
      if (!this.state.purchase.date) {
        return null;
      }

      return (
        <div>
          {this.state.purchase.version} {this.state.purchase.date.calendar()}
        </div>
      );
    }
  });
})();
