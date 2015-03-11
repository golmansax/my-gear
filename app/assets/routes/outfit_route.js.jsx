//= require components/outfit_view
//= require getters/outfit_getters

App.OutfitRoute = (function () {
  'use strict';

  return React.createClass({
    mixins: [React.BindMixin(App.OutfitStore, 'getStateFromStore')],

    propTypes: {
      id: PropTypes.string.isRequired
    },

    getStateFromStore: function () {
      return {
        outfit: App.OutfitGetters.FIND_BY_ID
      };
    },

    componentWillReceiveProps: function (newProps) {
      if (newProps.id !== this.state.outfit.id) {
        this.setState({
          outfit: App.OutfitGetters.FIND_BY_ID.get(null, { id: newProps.id })
        });
      }
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
