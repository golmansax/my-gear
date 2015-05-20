//= require views/purchase/table
//= require flux/brand/store

App.Brand.Route = (function () {
  'use strict';

  return React.createClass({
    mixins: [
      React.addons.PureRenderMixin,
      React.BindMixin(App.Brand.Store, 'getStateFromStore')
    ],

    propTypes: {
      id: PropTypes.string.isRequired
    },

    getStateFromStore: function (props) {
      return {
        brand: App.Brand.Store.get(props.id)
      };
    },

    render: function () {
      var purchaseIds = Immutable.List(this.state.brand.purchaseIds);

      return (
        <div>
          <ol className='breadcrumb'>
            <li>Brands</li>
            <li className='active'>{this.state.brand.name}</li>
          </ol>
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
