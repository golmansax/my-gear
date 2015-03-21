//= require models/clothing_item
//= require stores/clothing_item_store
//= require actions/clothing_item_actions

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

    componentWillMount: function () {
      App.ClothingItemActions.fetch(this.props.id);
      this.setState(this.getStateFromStore());
    },

    render: function () {
      if (this.state.clothingItem.isLoading) {
        return <div>Loading...</div>;
      }

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
