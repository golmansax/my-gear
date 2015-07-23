//= require ./label
//= require ../flux/store
//
//= require purchase/views/table
//= require purchase/flux/store
//= require shared/views/breadcrumb

App.Purpose.Route = (function () {
  'use strict';

  return React.createClass({
    mixins: [
      React.addons.PureRenderMixin,
      React.BindMixin(App.Purpose.Store, 'getStateFromStore')
    ],

    propTypes: {
      id: React.PropTypes.string.isRequired
    },

    getStateFromStore: function (props) {
      return {
        purpose: App.Purpose.Store.get(props.id)
      };
    },

    render: function () {
      var purchaseIds = Immutable.List(this.state.purpose.purchaseIds);
      var crumbs = [
        { title: 'Purposes' },
        { title: this.state.purpose.name }
      ];

      return (
        <div>
          <App.Shared.Breadcrumb crumbs={crumbs} />
          <h1>
            <App.Purpose.Label id={this.state.purpose.id} />
            ({purchaseIds.size})
          </h1>
          <br />
          <App.Purchase.Table ids={purchaseIds} />
        </div>
      );
    }
  });
})();
