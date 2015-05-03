//= require ./index
//= require ./header
//= require actions/data_loading_actions
//= require flux/data_loading/store

App.Layout.RootRoute = (function () {
  'use strict';

  return React.createClass({
    componentWillMount: function () {
      App.DataLoadingActions.fetchAll();
    },

    render: function () {
      return (
        <div>
          <App.Layout.Header />
          <div className='container'>
            <ReactRouter.RouteHandler {...this.props} />
          </div>
        </div>
      );
    }
  });
})();
