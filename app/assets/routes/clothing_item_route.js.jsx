//= require components/clothing_item_detailed_view

App.ClothingItemRoute = (function () {
  'use strict';

  return React.createClass({
    mixins: [ReactRouter.State],

    getInitialState: function () {
      var data = this.props.data.clothingItem || this.getParams();
      return { clothingItem: new App.ClothingItem(data, { parse: true }) };
    },

    componentWillMount: function () {
      this.state.clothingItem.on('all', this.forceUpdate.bind(this, null));
    },

    componentDidMount: function () {
      this.state.clothingItem.fetch();
    },

    render: function () {
      var clothingItem = this.state.clothingItem;

      if (clothingItem.isValid()) {
        return <App.ClothingItemDetailedView {...(clothingItem.toJSON())} />;
      } else {
        return <div>Loading...</div>;
      }
    }
  });
})();
