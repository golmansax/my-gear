define([
  'bower/react', 'components/clothing_item_table_row'
], function (React, ClothingItemTableRow) {
  'use strict';

  return React.createClass({
    getInitialProps: function () {
      return { clothingItems: [] };
    },
    _handleSort: function (sort) {
      this.props.handleSort(sort);
    },
    render: function () {
      var clothingItems = this.props.clothingItems.map(function (clothingItem) {
        return (
          <ClothingItemTableRow {...clothingItem} key={clothingItem.id} />
        );
      });

      return (
        <table className='table'>
          <tr>
            <th onClick={this._handleSort.bind(this, 'name')}>Name</th>
            <th onClick={this._handleSort.bind(this, 'type')}>Type</th>
            <th onClick={this._handleSort.bind(this, 'usage')}>Usage</th>
          </tr>
          <tbody>
            {clothingItems}
          </tbody>
        </table>
      );
    }
  });
});