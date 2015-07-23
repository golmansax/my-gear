//= require ../flux/store
//
//= require purchase/views/table
//= require shared/views/breadcrumb

App.Brand.Route = (function () {
  'use strict';

  return React.createClass({
    mixins: [
      React.addons.PureRenderMixin,
      React.BindMixin(App.Brand.Store, 'getStateFromStore')
    ],

    propTypes: {
      id: React.PropTypes.string.isRequired
    },

    getStateFromStore: function (props) {
      return {
        brand: App.Brand.Store.get(props.id)
      };
    },

    render: function () {
      var purchaseIds = Immutable.List(this.state.brand.purchaseIds);
      var crumbs = [
        { title: 'Brands' },
        { title: this.state.brand.name }
      ];

      return (
        <div>
          <App.Shared.Breadcrumb crumbs={crumbs} />
          <h1>
            {this.state.brand.name}
            &nbsp;({purchaseIds.size})
          </h1>
          <br />
          <App.Purchase.Table ids={purchaseIds} />
        </div>
      );
    }
  });
})();
