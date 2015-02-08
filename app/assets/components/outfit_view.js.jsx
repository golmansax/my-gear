//= require models/clothing_item

App.OutfitView = (function () {
  'use strict';

  return React.createClass({
    render: function () {
      return (
        <div>
          {this.props.name}
          <App.ClothingItemGrid ids={this.props.clothingItemIds} />
        </div>
      );
    }
  });
})();
