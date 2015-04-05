//= require components/header
//= require actions/data_loading_actions
//= require stores/data_loading_store

App.RootRoute = (function () {
  'use strict';

  return React.createClass({
    mixins: [
      React.BindMixin(App.DataLoadingStore, 'getStateFromStore'),
    ],

    getStateFromStore: function () {
      return { isLoading: App.DataLoadingStore.isLoading() };
    },

    componentWillMount: function () {
      App.DataLoadingActions.fetchAll();
      this.setState(this.getStateFromStore());
    },

    _renderContent: function () {
      if (this.state.isLoading) {
        return <div>Loading...</div>;
      }

      return <ReactRouter.RouteHandler {...this.props} />;
    },

    render: function () {
      return (
        <div>
          <App.Header />
          <div className='container'>
            {this._renderContent()}
          </div>
        </div>
      );
    }
  });
})();
