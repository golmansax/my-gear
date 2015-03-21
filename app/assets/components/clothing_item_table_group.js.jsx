//= require components/clothing_item_table
App.ClothingItemTableGroup = (function () {
  'use strict';

  return React.createClass({
    getInitialProps: function () {
      return { clothingItems: [], groupBy: null };
    },

    getInitialState: function () {
      var groupedKeyOrder = computeGroupedKeyOrder(
        this.props.clothingItems,
        this.props.groupBy
      );

      return { groupedKeyOrder: groupedKeyOrder };
    },

    componentWillReceiveProps: function (newProps) {
      var newGroupedKeyOrder = computeGroupedKeyOrder(
        newProps.clothingItems,
        newProps.groupBy
      );

      if (this.state.groupedKeyOrder !== newGroupedKeyOrder) {
        this.setState({ groupedKeyOrder: newGroupedKeyOrder });
      }
    },

    _renderTable: function (clothingItems, attr) {
      return (
        <App.ClothingItemTable
          key={attr}
          clothingItems={clothingItems}
          handleSort={this.props.handleSort}
          title={App.Utils.capitalize(this.props.groupBy) + ': ' + attr}
        />
      );
    },

    render: function () {
      var groupedClothingItems = this.props.clothingItems
        .groupBy(function (clothingItem) {
          return clothingItem[this.props.groupBy];
        }.bind(this));

      //var tables = _(this.state.groupedKeyOrder).map(function (key) {
      var tables = groupedClothingItems.map(function (clothingItems, key) {
        return this._renderTable(clothingItems, key);
      }.bind(this)).valueSeq().toJS();

      return (
        <div>{tables}</div>
      );
    }
  });

  function computeGroupedKeyOrder(clothingItems, groupBy) {
    if (clothingItems.size === 0 || !groupBy) {
      return null;
    }
    //return _.chain(clothingItems).groupBy(groupBy).keys().value();
    return clothingItems;
  }
})();
