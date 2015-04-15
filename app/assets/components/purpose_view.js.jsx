//= require components/purchase_grid
//= require models/purpose/view_model

App.PurposeView = (function () {
  'use strict';

  return React.createClass({
    propTypes: {
      purpose: React.PropTypes.instanceOf(App.Purpose.ViewModel)
    },

    render: function () {
      return (
        <div>
          {this.props.name}
          <App.PurchaseGrid ids={this.props.purpose.purchaseIds} />
        </div>
      );
    }
  });
})();
