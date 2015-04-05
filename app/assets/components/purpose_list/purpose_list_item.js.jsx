//= require stores/outfit_store

App.PurposeListItem = (function () {
  'use strict';

  return React.createClass({
    mixins: [React.BindMixin(App.OutfitStore, 'getStateFromStore')],

    propTypes: {
      id: PropTypes.string.isRequired
    },

    getStateFromStore: function (props) {
      return {
        purpose: App.OutfitStore.get(props.id)
      };
    },

    render: function () {
      return <div>{this.state.purpose.name}</div>;
    }
  });
})();
