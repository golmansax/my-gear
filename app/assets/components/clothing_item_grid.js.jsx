//= require components/clothing_item_grid_item

App.ClothingItemGrid = (function () {

  'use strict';

  return React.createClass({
    propTypes: {
      ids: PropTypes.arrayOf(PropTypes.string).isRequired
    },

    _renderClothingItem: function (id) {
      return (
        <ReactBootstrap.Col sm={4} key={id}>
          <App.ClothingItemGridItem id={id} />
        </ReactBootstrap.Col>
      );
    },

    render: function () {
      return (
        <ReactBootstrap.Row>
          {this.props.ids.map(this._renderClothingItem)}
        </ReactBootstrap.Row>
      );
    }
  });
})();
