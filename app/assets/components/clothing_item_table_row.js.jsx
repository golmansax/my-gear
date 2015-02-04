//= require models/clothing_item

App.ClothingItemTableRow = (function () {
  'use strict';

  return React.createClass({
    propTypes: App.ClothingItem.propTypes,
    render: function () {
      return (
        <tr>
          <td>
            <ReactRouter.Link to='clothing_item' params={{ id: this.props.id }}>
              {this.props.name}
            </ReactRouter.Link>
          </td>
          <td>{this.props.type}</td>
          <td>{this.props.usage}</td>
        </tr>
      );
    }
  });
})();
