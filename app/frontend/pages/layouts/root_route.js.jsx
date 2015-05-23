//= require ./header

App.Pages.RootRoute = (function () {
  'use strict';

  return React.createClass({
    render: function () {
      return (
        <div>
          <App.Pages.Header />
          <div className='container'>
            <ReactRouter.RouteHandler {...this.props} />
          </div>
        </div>
      );
    }
  });
})();
