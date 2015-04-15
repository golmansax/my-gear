//= require components/purchase_grid_item

App.PurchaseGrid = (function () {
  'use strict';

  return React.createClass({
    mixins: [React.addons.PureRenderMixin],

    propTypes: {
      ids: PropTypes.arrayOf(PropTypes.number).isRequired
    },

    _renderPurchase: function (id) {
      return (
        <ReactBootstrap.Col sm={4} key={id}>
          <App.PurchaseGridItem id={id} />
        </ReactBootstrap.Col>
      );
    },

    render: function () {
      return (
        <ReactBootstrap.Row>
          {this.props.ids.map(this._renderPurchase)}
        </ReactBootstrap.Row>
      );
    }
  });
})();
