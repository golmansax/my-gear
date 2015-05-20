//= require ./index
//= require ./header

App.Layout.RootRoute = (function () {
  'use strict';

  return React.createClass({
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
