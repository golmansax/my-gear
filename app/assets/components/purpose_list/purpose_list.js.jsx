//= require ./purpose_list_item

App.PurposeList = (function () {
  'use strict';

  return React.createClass({
    mixins: [React.addons.PureRenderMixin],

    propTypes: {
      ids: PropTypes.arrayOf(PropTypes.string).isRequired,
    },

    _renderPurpose: function (id) {
      return <App.PurposeListItem id={id} key={id} />;
    },

    render: function () {
      return <span>{this.props.ids.map(this._renderPurpose)}</span>;
    }
  });
})();
