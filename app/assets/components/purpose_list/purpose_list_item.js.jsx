//= require stores/outfit_store
//= require actions/outfit_actions

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

    componentWillMount: function () {
      App.OutfitActions.fetch(this.props.id);
      this.setState(this.getStateFromStore(this.props));
    },

    render: function () {
      if (this.state.purpose.isLoading) {
        return null;
      }

      return <div>{this.state.purpose.name}</div>;
    }
  });
})();
