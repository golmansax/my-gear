//= require ./index
//= require stores/purpose_store

App.Purpose.Label = (function () {
  'use strict';

  return React.createClass({
    mixins: [
      React.addons.PureRenderMixin,
      React.BindMixin(App.PurposeStore, 'getStateFromStore')
    ],

    propTypes: {
      id: PropTypes.string.isRequired
    },

    getStateFromStore: function (props) {
      return {
        purpose: App.PurposeStore.get(props.id)
      };
    },

    _getLabelClass: function () {
      return 'label-' + this.state.purpose.id;
    },

    render: function () {
      return (
        <ReactRouter.Link
          to='purpose'
          params={{ id: this.state.purpose.id }}
          className={'purpose-label label ' + this._getLabelClass()}
          >
          {this.state.purpose.name}
        </ReactRouter.Link>
      );
    }
  });
})();
