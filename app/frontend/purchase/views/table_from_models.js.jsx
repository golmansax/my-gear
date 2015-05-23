//= require ./table

App.Purchase.TableFromModels = (function () {
  'use strict';

  return React.createClass({
    mixins: [React.addons.PureRenderMixin],

    propTypes: {
      purchases: PropTypes.instanceOf(Immutable.Iterable).isRequired
    },

    render: function () {
      var purchaseIds = this.props.purchases.map(function (purchase) {
        return purchase.id;
      }).valueSeq().toList();

      return <App.Purchase.Table ids={purchaseIds} />;
    }
  });
})();
