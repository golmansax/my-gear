//= require ./label
//= require ../flux/store
//
//= require purchase/views/table
//= require purchase/flux/store

App.Purpose.Route = (function () {
  'use strict';

  return React.createClass({
    mixins: [
      React.addons.PureRenderMixin,
      React.BindMixin(App.Purpose.Store, 'getStateFromStore')
    ],

    propTypes: {
      id: PropTypes.string.isRequired
    },

    getStateFromStore: function (props) {
      return {
        purpose: App.Purpose.Store.get(props.id)
      };
    },

    render: function () {
      var purchaseIds = Immutable.List(this.state.purpose.purchaseIds);

      return (
        <div>
          <ol className='breadcrumb'>
            <li>Purposes</li>
            <li className='active'>{this.state.purpose.name}</li>
          </ol>
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
