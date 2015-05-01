//= require ./index
//= require stores/purchase_store
//= require views/purpose/label_list

App.Purchase.ListItem = (function () {
  'use strict';

  return React.createClass({
    mixins: [
      React.addons.PureRenderMixin,
      React.BindMixin(App.PurchaseStore, 'getStateFromStore')
    ],

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
          {this.state.purchase.formattedDate()}&nbsp;
          <App.Purpose.LabelList ids={this.state.purchase.purposeIds} />
        </div>
      );
    }
  });
})();