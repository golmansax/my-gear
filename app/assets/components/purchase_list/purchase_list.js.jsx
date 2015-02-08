//= require ./purchase_list_item

App.PurchaseList = (function () {
  'use strict';

  return React.createClass({
    _renderPurchase: function (id) {
      return <App.PurchaseListItem id={id} key={id} />
    },

    render: function () {
      return (
        <div>
          <h4>Purchases:</h4>
          {this.props.ids.map(this._renderPurchase)}
        </div>
      );
    }
  });
})();
