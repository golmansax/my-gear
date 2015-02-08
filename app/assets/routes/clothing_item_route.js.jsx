//= require components/clothing_item_detailed_view
//= require models/clothing_item

App.ClothingItemRoute = (function () {
  'use strict';

  return React.createClass({
    propTypes: {
      id: PropTypes.string.isRequired
    },

    _getStateFromStore: function (id) {
      return { clothingItem: App.ClothingItemStore.get(id) };
    },

    getInitialState: function () {
      return this._getStateFromStore(this.props.id);
    },

    componentDidMount: function() {
      App.ClothingItemStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
      App.ClothingItemStore.removeChangeListener(this._onChange);
    },

    _onChange: function () {
      this.setState(this._getStateFromStore(this.props.id));
    },

    render: function () {
      var clothingItem = this.state.clothingItem;

      // TODO check validation
      if (new App.ClothingItem(clothingItem).isValid()) {
        return <App.ClothingItemDetailedView {...clothingItem} />;
      } else {
        return <div>Loading...</div>;
      }
    }
  });
})();
