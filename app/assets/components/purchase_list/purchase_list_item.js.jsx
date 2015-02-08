//= require stores/purchase_store

App.PurchaseListItem = (function () {
  'use strict';

  return React.createClass({
    mixins: [App.StoreWatchMixin(App.PurchaseStore, '_onChange')],

    propTypes: {
      id: PropTypes.number.isRequired
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
