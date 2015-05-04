//= require ./index
//= require ./header
//= require flux/data_loading/actions
//= require flux/data_loading/store

App.Layout.RootRoute = (function () {
  'use strict';

  return React.createClass({
    componentWillMount: function () {
      App.DataLoading.Actions.fetchAll();
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
