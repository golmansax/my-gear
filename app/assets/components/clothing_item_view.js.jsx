//= require models/clothing_item
//= require stores/clothing_item_store

App.ClothingItemView = (function () {
  'use strict';

  return React.createClass({
    mixins: [React.BindMixin(App.ClothingItemStore, 'getStateFromStore')],

    propTypes: {
      id: PropTypes.string.isRequired
    },

    getStateFromStore: function () {
      return {
        clothingItem: App.ClothingItemStore.get(this.props.id)
      };
    },

    render: function () {
      if (!this.state.clothingItem) {
        return <div>Loading...</div>;
      } else {
        var imageAttrs = {
          className: 'img-responsive',
          src: this.state.clothingItem.imagePath
        };

        return (
          <div>
            <ReactRouter.Link to='clothing_item' params={{ id: this.props.id }}>
              {this.state.clothingItem.name}
            </ReactRouter.Link>
            <img {...imageAttrs} />
          </div>
        );
      }
    }
  });
})();
