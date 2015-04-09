//= require components/clothing_item_grid
//= require models/purpose/view_model

App.PurposeView = (function () {
  'use strict';

  return React.createClass({
    propTypes: {
      purpose: React.PropTypes.instanceOf(App.Purpose.ViewModel)
    },

    render: function () {
      return (
        <div>
          {this.props.name}
          <App.ClothingItemGrid ids={this.props.purpose.clothingItemIds} />
        </div>
      );
    }
  });
})();
