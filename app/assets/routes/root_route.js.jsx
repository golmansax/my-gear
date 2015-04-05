//= require components/header
//= require actions/clothing_item_actions
//= require actions/outfit_actions
//= require actions/purchase_actions

App.RootRoute = (function () {
  'use strict';

  return React.createClass({
    componentWillMount: function () {
      App.ClothingItemActions.fetchAll();
      App.OutfitActions.fetchAll();
      App.PurchaseActions.fetchAll();
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
