//= require components/outfit_view
//= require stores/outfit_store

App.OutfitRoute = (function () {
  'use strict';

  return React.createClass({
    mixins: [React.BindMixin(App.OutfitStore, 'getStateFromStore')],

    propTypes: {
      id: PropTypes.string.isRequired
    },

    getStateFromStore: function () {
      return {
        outfit: App.OutfitStore.get(this.props.id)
      };
    },

    render: function () {
      return (
        <div>
          OUTFIT
          <App.OutfitView {...this.state.outfit} />
        </div>
      );
    }
  });
})();
