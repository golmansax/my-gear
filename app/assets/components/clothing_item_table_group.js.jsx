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
        <App.ClothingItemTable key={attr} clothingItems={clothingItems}
            handleSort={this.props.handleSort} />
      );
    },

    render: function () {
      var groupedClothingItems = _(this.props.clothingItems)
        .groupBy(this.props.groupBy);

      var orderedGroupedClothingItems = _(this.state.groupedKeyOrder)
        .map(function (key) {
          return groupedClothingItems[key];
        });

      var tables = _(orderedGroupedClothingItems).map(this._renderTable);

      return (
        <div>{tables}</div>
      );
    }
  });

  function computeGroupedKeyOrder(clothingItems, groupBy) {
    if (clothingItems.length === 0 || !groupBy) {
      return null;
    }
    return _.chain(clothingItems).groupBy(groupBy).keys().value();
  }
})();
