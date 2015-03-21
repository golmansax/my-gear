//= require components/clothing_item_table_row

App.ClothingItemTable = (function () {
  'use strict';

  return React.createClass({
    getInitialProps: function () {
      return { clothingItems: [] };
    },
    _handleSort: function (sort) {
      this.props.handleSort(sort);
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
        <div>
          <h3>{this.props.title} ({this.props.clothingItems.size})</h3>
          <table className='table clothing-item-table'>
            <tr>
              <th onClick={this._handleSort.bind(this, 'name')}>Name</th>
              <th onClick={this._handleSort.bind(this, 'type')}>Type</th>
              <th onClick={this._handleSort.bind(this, 'usage')}>Usage</th>
            </tr>
            <tbody>
              {clothingItems}
            </tbody>
          </table>
        </div>
      );
    }
  });
})();
