//= require models/clothing_item_view_model

App.ClothingItemTableRow = (function () {
  'use strict';

  return React.createClass({
    propTypes: {
      clothingItem: React.PropTypes.instanceOf(App.ClothingItemViewModel)
    },

    render: function () {
      return (
        <tr>
          <td>
            <ReactRouter.Link
              to='clothing_item'
              params={{ id: this.props.clothingItem.id }}
              >
              {this.props.clothingItem.name()}
            </ReactRouter.Link>
          </td>
          <td>{this.props.clothingItem.type}</td>
          <td>{this.props.clothingItem.usage}</td>
        </tr>
      );
    }
  });
})();
