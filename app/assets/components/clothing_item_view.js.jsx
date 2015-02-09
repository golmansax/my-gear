//= require models/clothing_item
//= require getters/clothing_item_getters
//= require mixins/store_state_mixin

App.ClothingItemView = (function () {
  'use strict';

  return React.createClass({
    mixins: [App.StoreStateMixin],

    propTypes: {
      id: PropTypes.string.isRequired
    },

    stateFromStores: {
      clothingItem: App.ClothingItemGetters.FIND_BY_ID
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
