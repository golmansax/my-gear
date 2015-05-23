//= require ./label

App.Purpose.LabelList = (function () {
  'use strict';

  return React.createClass({
    mixins: [React.addons.PureRenderMixin],

    propTypes: {
      ids: PropTypes.arrayOf(PropTypes.string).isRequired
    },

    _renderPurpose: function (id) {
      return <App.Purpose.Label id={id} key={id} />;
    },

    render: function () {
      return <span>{this.props.ids.map(this._renderPurpose)}</span>;
    }
  });
})();
