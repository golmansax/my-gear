//= require stores/purchase_store

App.PurchaseListItem = (function () {
  'use strict';

  return React.createClass({
    mixins: [React.BindMixin(App.PurchaseStore, 'getStateFromStore')],

    propTypes: {
      id: PropTypes.number.isRequired
    },

    getStateFromStore: function () {
      return {
        purchase: App.PurchaseStore.get(this.props.id)
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
