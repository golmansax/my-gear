//= require ./purpose_list_item

App.PurposeList = (function () {
  'use strict';

  return React.createClass({
    _renderPurpose: function (id) {
      return <App.PurposeListItem id={id} key={id} />;
    },

    render: function () {
      return <span>{this.props.ids.map(this._renderPurpose)}</span>;
    }
  });
})();
