//= require components/outfit_view
//= require models/outfit

App.OutfitRoute = (function () {
  'use strict';

  return React.createClass({
    mixins: [ReactRouter.State],

    componentDidMount: function () {
      this.state.outfit.fetch();
    },

    componentWillMount: function () {
      this.state.clothingItem.on('all', this.forceUpdate.bind(this, null));
    },

    getInitialState: function () {
      var data = this.props.data.outfit || this.getParams();
      return { outfit: new App.Outfit(data, { parse: true }) };
    },


    render: function () {
      return (
        <div>
          OUTFIT
          <App.OutfitView {...this.state.outfit.toJSON()} />
        </div>
      );
    }
  });
})();
