App.ClothingItemTableRow = (function () {
  'use strict';

  return React.createClass({
    render: function () {
      return (
        <tr>
          <td>{this.props.name}</td>
          <td>{this.props.type}</td>
          <td>{this.props.usage}</td>
        </tr>
      );
    }
  });
})();
