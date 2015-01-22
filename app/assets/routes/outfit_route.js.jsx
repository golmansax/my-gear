//= require components/outfit_view

App.OutfitRoute = (function () {
  'use strict';

  return React.createBackboneClass({
    componentDidMount: function () {
      this.getModel().fetch();
    },
    render: function () {
      return (
        <div>
          OUTFIT
          <App.OutfitView {...this.getModel().toJSON()} />
        </div>
      );
    }
  });
})();
