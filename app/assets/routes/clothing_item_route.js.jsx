//= require components/clothing_item_detailed_view

App.ClothingItemRoute = (function () {
  'use strict';

  return React.createBackboneClass({
    componentDidMount: function () {
      this.getModel().fetch();
    },
    render: function () {
      var model = this.getModel();

      if (model.isValid()) {
        return <App.ClothingItemDetailedView {...model.attributes} />;
      } else {
        return <div>Loading...</div>;
      }
    }
  });
})();
