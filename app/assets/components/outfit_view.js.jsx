//= require components/clothing_item_grid
//= require models/outfit_view_model
//= require actions/clothing_item_actions

App.OutfitView = (function () {
  'use strict';

  return React.createClass({
    propTypes: {
      outfit: React.PropTypes.instanceOf(App.OutfitViewModel)
    },

    componentWillMount: function () {
      App.ClothingItemActions.fetchAll();
    },

    render: function () {
      return (
        <div>
          {this.props.name}
          <App.ClothingItemGrid ids={this.props.outfit.clothingItemIds} />
        </div>
      );
    }
  });
})();
