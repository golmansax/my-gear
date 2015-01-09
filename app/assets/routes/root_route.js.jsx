define([
  'bower/react', 'bower/react_router', 'collections/outfit_collection',
  'components/header'
], function (React, Router, OutfitCollection, Header) {
  'use strict';

  return React.createClass({
    getInitialState: function () {
      return { outfits: new OutfitCollection() };
    },
    render: function () {
      return (
        <div>
          <Header collection={this.state.outfits} />
          <div className='container'>
            <Router.RouteHandler />
          </div>
        </div>
      );
    }
  });
});
