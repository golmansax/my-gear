//= require components/outfit_view
//= require stores/outfit_store
//= require actions/outfit_actions

App.OutfitRoute = (function () {
  'use strict';

  return React.createClass({
    mixins: [React.BindMixin(App.OutfitStore, 'getStateFromStore')],

    propTypes: {
      id: PropTypes.string.isRequired
    },

    componentWillMount: function () {
      App.OutfitActions.fetch(this.props.id);
      this.setState(this.getStateFromStore(this.props));
    },

    componentWillReceiveProps: function (newProps) {
      App.OutfitActions.fetch(newProps.id);
      this.setState(this.getStateFromStore(newProps));
    },

    getStateFromStore: function (props) {
      return {
        outfit: App.OutfitStore.get(props.id)
      };
    },

    render: function () {
      if (this.state.outfit.isLoading) {
        return <div>Loading ...</div>;
      }

      return (
        <div>
          <h1>{this.state.outfit.name}</h1>
          <br />
          <App.OutfitView outfit={this.state.outfit} />
        </div>
      );
    }
  });
})();
