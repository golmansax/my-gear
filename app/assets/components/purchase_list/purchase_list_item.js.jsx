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

    getInitialState: function () {
      return this._getStateFromStore(this.props.id);
    },

    _onChange: function () {
      this.setState(this._getStateFromStore(this.props.id));
    },

    _getStateFromStore: function (id) {
      return { purchase: App.PurchaseStore.get(id) };
    },

    render: function () {
      return (
        <div>
          {this.state.purchase.version} {this.state.purchase.date}
        </div>
      );
    }
  });
})();
