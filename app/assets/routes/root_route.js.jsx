//= require components/header

App.RootRoute = (function () {
  'use strict';

  return React.createClass({
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
