var RootRoute = React.createClass({
  /*
  getInitialState: function () {
    return { outfits: new OutfitCollection() };
  },
  */
  render: function () {
    //<Header collection={this.state.outfits} />
    return (
      <div>
        <div className='container'>
          Hello World!
          <ReactRouter.RouteHandler />
        </div>
      </div>
    );
  }
});
