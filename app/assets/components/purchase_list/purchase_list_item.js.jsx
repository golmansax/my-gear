//= require stores/purchase_store

App.PurchaseListItem = (function () {
  'use strict';

  return React.createClass({
    mixins: [React.BindMixin(App.PurchaseStore, 'getStateFromStore')],

    propTypes: {
      id: PropTypes.number.isRequired
    },

    getStateFromStore: function (props) {
      return {
        purchase: App.PurchaseStore.get(props.id)
      };
    },

    render: function () {
      if (!this.state.purchase.date) {
        return null;
      }

      return (
        <div>
          {this.state.purchase.version}&nbsp;
          {moment(this.state.purchase.date).calendar()}&nbsp;
          <App.PurposeList ids={this.state.purchase.purposeIds} />
        </div>
      );
    }
  });
})();
