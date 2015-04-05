//= require models/clothing_item
//= require stores/clothing_item_store

App.ClothingItemGridItem = (function () {
  'use strict';

  return React.createClass({
    mixins: [React.BindMixin(App.ClothingItemStore, 'getStateFromStore')],

    propTypes: {
      id: PropTypes.string.isRequired
    },

    getStateFromStore: function (props) {
      return {
        clothingItem: App.ClothingItemStore.get(props.id)
      };
    },

    render: function () {
      var imageAttrs = {
        className: 'img-responsive',
        src: this.state.clothingItem.imagePath
      };

      return (
        <div>
          <ReactRouter.Link to='clothing_item' params={{ id: this.props.id }}>
            {this.state.clothingItem.name()}
          </ReactRouter.Link>
          <img {...imageAttrs} />
        </div>
      );
    }
  });
})();
