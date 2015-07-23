//= require ./grid_item

App.Purchase.Grid = (function () {
  'use strict';

  return React.createClass({
    mixins: [React.addons.PureRenderMixin],

    propTypes: {
      ids: React.PropTypes.arrayOf(React.PropTypes.number).isRequired
    },

    _renderPurchase: function (id) {
      return (
        <ReactBootstrap.Col sm={4} key={id}>
          <App.Purchase.GridItem id={id} />
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
