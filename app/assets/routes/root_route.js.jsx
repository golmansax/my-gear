//= require components/header
//= require actions/data_loading_actions
//= require stores/data_loading_store

App.RootRoute = (function () {
  'use strict';

  return React.createClass({
    componentWillMount: function () {
      App.DataLoadingActions.fetchAll();
    },

    render: function () {
      return (
        <div>
          <App.Header />
          <div className='container'>
            <ReactRouter.RouteHandler {...this.props} />
          </div>
        </div>
      );
    }
  });
})();
