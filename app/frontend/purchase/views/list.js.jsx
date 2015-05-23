//= require ./list_item

App.Purchase.List = (function () {
  'use strict';

  return React.createClass({
    mixins: [React.addons.PureRenderMixin],

    propTypes: {
      ids: PropTypes.arrayOf(PropTypes.number).isRequired
    },

    _renderPurchase: function (id) {
      return <App.Purchase.ListItem id={id} key={id} />;
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
