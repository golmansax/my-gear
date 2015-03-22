//= require stores/purchase_store
//= require actions/purchase_actions

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

    componentWillMount: function () {
      App.PurchaseActions.fetch(this.props.id);
      this.setState(this.getStateFromStore(this.props));
    },

    render: function () {
      if (!this.state.purchase.date) {
        return null;
      }

      return (
        <div>
          {this.state.purchase.version}&nbsp;
          {moment(this.state.purchase.date).calendar()}
        </div>
      );
    }
  });
})();
