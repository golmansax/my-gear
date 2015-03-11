//= require getters/purchase_getters

App.PurchaseListItem = (function () {
  'use strict';

  return React.createClass({
    mixins: [React.BindMixin(App.PurchaseStore, 'getStateFromStore')],

    propTypes: {
      id: PropTypes.number.isRequired
    },

    getStateFromStore: function () {
      return {
        purchase: App.PurchaseGetters.FIND_BY_ID
      };
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
