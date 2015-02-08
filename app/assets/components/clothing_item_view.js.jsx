//= require models/clothing_item
//= require stores/clothing_item_store
//= require mixins/store_watch_mixin

App.ClothingItemView = (function () {
  'use strict';

  return React.createClass({
    mixins: [App.StoreWatchMixin(App.ClothingItemStore, '_onChange')],

    propTypes: {
      id: PropTypes.string.isRequired
    },

    _getStateFromStore: function (id) {
      return { clothingItem: App.ClothingItemStore.get(id) };
    },

    getInitialState: function () {
      return this._getStateFromStore(this.props.id);
    },

    _onChange: function () {
      this.setState(this._getStateFromStore(this.props.id));
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
