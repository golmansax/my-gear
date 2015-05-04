//= require ./index

App.Layout.ClothingRoute = (function () {
  'use strict';

  return React.createClass({
    mixins: [
      React.BindMixin(App.DataLoading.Store, 'getStateFromStore')
    ],

    getStateFromStore: function () {
      return { isLoading: App.DataLoading.Store.isLoading() };
    },

    render: function () {
      if (this.state.isLoading) {
        return <div>Loading...</div>;
      }

      return <ReactRouter.RouteHandler {...this.props} />;
    }
  });
})();
