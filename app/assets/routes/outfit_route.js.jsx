define([
  'bower/react', 'models/outfit', 'components/outfit_view'
], function (React, Outfit, OutfitView) {
  'use strict';

  return React.createBackboneClass({
    componentDidMount: function () {
      this.getModel().fetch();
    },
    render: function () {
      return (
        <div>
          OUTFIT
          <OutfitView {...this.getModel().attributes} />
        </div>
      );
    }
  });
});