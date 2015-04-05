//= require components/clothing_item_grid
//= require models/outfit_view_model

App.OutfitView = (function () {
  'use strict';

  return React.createClass({
    propTypes: {
      outfit: React.PropTypes.instanceOf(App.OutfitViewModel)
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
