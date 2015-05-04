//= require ./detailed_view
//= require flux/clothing_item/store

App.ClothingItem.Route = (function () {
  'use strict';

  return React.createClass({
    mixins: [
      React.addons.PureRenderMixin,
      React.BindMixin(App.ClothingItem.Store, 'getStateFromStore')
    ],

    propTypes: {
      id: PropTypes.string.isRequired
    },

    getStateFromStore: function (props) {
      return {
        clothingItem: App.ClothingItem.Store.get(props.id)
      };
    },

    render: function () {
      return (
        <App.ClothingItem.DetailedView clothingItem={this.state.clothingItem} />
      );
    }
  });
})();
