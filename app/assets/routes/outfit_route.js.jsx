//= require components/outfit_view
//= require mixins/store_state_mixin
//= require getters/outfit_getters

App.OutfitRoute = (function () {
  'use strict';

  return React.createClass({
    mixins: [App.StoreStateMixin],

    propTypes: {
      id: PropTypes.string.isRequired
    },

    stateFromStores: {
      outfit: App.OutfitGetters.FIND_BY_ID
    },

    componentWillReceiveProps: function (newProps) {
      if (newProps.id !== this.state.outfit.id) {
        this.updateStateFromStore();
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
