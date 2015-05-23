//= require ../index
//= require ../flux/store
//
//= require purpose/views/label_list

App.Purchase.ListItem = (function () {
  'use strict';

  return React.createClass({
    mixins: [
      React.addons.PureRenderMixin,
      React.BindMixin(App.Purchase.Store, 'getStateFromStore')
    ],

    propTypes: {
      id: PropTypes.number.isRequired
    },

    getStateFromStore: function (props) {
      return {
        purchase: App.Purchase.Store.get(props.id)
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
