define(['bower/react'], function (React) {
  'use strict';

  return React.createBackboneClass({
    componentDidMount: function () {
      this.getCollection().fetch();
    },
    getInitialState: function () {
      return { currentSort: this.getCollection().defaultSort };
    },
    _sort: function (sort) {
      if (this.state.currentSort === sort) {
        this.getCollection().reverseSort();
      } else {
        this.getCollection().changeSort([sort]);
        this.setState({ currentSort: sort });
      }
    },
    _renderClothingItem: function (clothingItem) {
      return (
        <tr key={clothingItem.get('id')}>
          <td>{clothingItem.get('name')}</td>
          <td>{clothingItem.get('type')}</td>
          <td>{clothingItem.get('usage')}</td>
        </tr>
      );
    },
    render: function () {
      var clothingItems = this.getCollection().map(this._renderClothingItem);

      return (
        <div>
          <h1>List of Everything</h1>
          <table className='table'>
            <tr>
              <th onClick={this._sort.bind(this, 'name')}>Name</th>
              <th onClick={this._sort.bind(this, 'type')}>Type</th>
              <th onClick={this._sort.bind(this, 'usage')}>Usage</th>
            </tr>
            <tbody>
              {clothingItems}
            </tbody>
          </table>
        </div>
      );
    }
  });
});
