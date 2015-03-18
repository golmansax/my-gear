//= require components/clothing_item_detailed_view
//= require models/clothing_item
//= require stores/clothing_item_store
//= require actions/clothing_item_actions

App.ClothingItemRoute = (function () {
  'use strict';

  return React.createClass({
    mixins: [React.BindMixin(App.ClothingItemStore, 'getStateFromStore')],

    propTypes: {
      id: PropTypes.string.isRequired
    },

    componentWillMount: function () {
      App.ClothingItemActions.fetch(this.props.id);
      this.setState(this.getStateFromStore());
    },

    getStateFromStore: function () {
      return {
        clothingItem: App.ClothingItemStore.get(this.props.id)
      };
    },

    render: function () {
      if (this.state.clothingItem.isLoading) {
        return <div>Loading...</div>;
      }

      return (
        <App.ClothingItemDetailedView clothingItem={this.state.clothingItem} />
      );
    }
  });
})();
