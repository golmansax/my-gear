//= require collections/outfit_collection
//= require components/header

App.RootRoute = (function () {
  'use strict';

  return React.createClass({
    getInitialState: function () {
      return { outfits: new App.OutfitCollection() };
    },
    render: function () {
      return (
        <div>
          <App.Header collection={this.state.outfits} />
          <div className='container'>
            <ReactRouter.RouteHandler data={this.props.data} />
          </div>
        </div>
      );
    }
  });
})();
