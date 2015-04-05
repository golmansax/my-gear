//= require ./clothing_item_table_row

App.ClothingItemTable = (function () {
  'use strict';

  return React.createClass({
    propTypes: {
      clothingItems: PropTypes.instanceOf(Immutable.Iterable)
    },

    render: function () {
      var clothingItems = this.props.clothingItems.valueSeq()
        .map(function (clothingItem) {
          return (
            <App.ClothingItemTableRow
              clothingItem={clothingItem}
              key={clothingItem.id}
            />
          );
        }).toJS();

      return (
        <table className='table clothing-item-table'>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Usage</th>
          </tr>
          <tbody>
            {clothingItems}
          </tbody>
        </table>
      );
    }
  });
})();
