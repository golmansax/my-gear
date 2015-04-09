App.ClothingRoute = (function () {
  'use strict';

  return React.createClass({
    mixins: [
      React.BindMixin(App.DataLoadingStore, 'getStateFromStore')
    ],

    getStateFromStore: function () {
      return { isLoading: App.DataLoadingStore.isLoading() };
    },

    render: function () {
      if (this.state.isLoading) {
        return <div>Loading...</div>;
      }

      return <ReactRouter.RouteHandler {...this.props} />;
    }
  });
})();