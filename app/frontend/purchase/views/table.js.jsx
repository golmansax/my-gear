//= require ./table_row

App.Purchase.Table = (function () {
  'use strict';

  return React.createClass({
    mixins: [React.addons.PureRenderMixin],

    propTypes: {
      ids: React.PropTypes.instanceOf(Immutable.List).isRequired
    },

    _renderPurchases: function () {
      return this.props.ids.map(function (id) {
        return <App.Purchase.TableRow id={id} key={id} />;
      }).toJS();
    },

    render: function () {
      return (
        <table className='table purchase-table'>
          <tr>
            <th>Brand</th>
            <th>Model</th>
            <th>Version</th>
            <th>Type</th>
            <th>Usage</th>
            <th>Purchase Date</th>
          </tr>
          <tbody>{this._renderPurchases()}</tbody>
        </table>
      );
    }
  });
})();
