//= require data_loading/flux/actions
//= require data_loading/flux/store

App.Pages.ClothingRoute = (function () {
  'use strict';

  return React.createClass({
    mixins: [
      React.BindMixin(App.DataLoading.Store, 'getStateFromStore')
    ],

    getStateFromStore: function () {
      return { isLoading: App.DataLoading.Store.isLoading() };
    },

    componentWillMount: function () {
      App.DataLoading.Actions.fetchAll();
      this.setState(this.getStateFromStore());
    },

    render: function () {
      if (this.state.isLoading) {
        return <div>Loading...</div>;
      }

      return <ReactRouter.RouteHandler {...this.props} />;
    }
  });
})();
