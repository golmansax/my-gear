//= require components/purchase_grid
//= require models/purpose/view_model

App.PurposeView = (function () {
  'use strict';

  return React.createClass({
    mixins: [React.addons.PureRenderMixin],

    propTypes: {
      purpose: React.PropTypes.instanceOf(App.Purpose.ViewModel)
    },

    render: function () {
      return (
        <App.PurchaseGrid ids={this.props.purpose.purchaseIds} />
      );
    }
  });
})();
