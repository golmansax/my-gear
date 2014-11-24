define([
  'bower/react', 'bower/react_router', 'collections/outfit_list',
  'components/header'
], function (React, Router, OutfitList, Header) {
  'use strict';

  return React.createClass({
    getInitialState: function () {
      return { outfits: new OutfitList() };
    },
    render: function () {
      return (
        <div>
          <Header collection={this.state.outfits} />
          <div className='container'>
            {this.props.activeRouteHandler()}
          </div>
        </div>
      );
    }
  });
});
