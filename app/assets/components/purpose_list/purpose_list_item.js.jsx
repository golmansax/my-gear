//= require stores/purpose_store

App.PurposeListItem = (function () {
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

    // This maps to the label color
    _getLabelType: function () {
      var labelTypeMap = {
        success: [
          'hiking', 'swimming', 'frisbee', 'climbing', 'basketball', 'tennis'
        ],
        primary: ['essential'],
        danger: ['for-girlfriend'],
        warning: ['expressive'],
        info: ['cold-weather']
      };

      var id = this.state.purpose.id;
      var myLabelType = 'default';

      _(labelTypeMap).find(function (validIds, labelType) {
        if (_(validIds).contains(id)) {
          myLabelType = labelType;
          return true;
        }
      });

      return myLabelType;
    },

    render: function () {
      return (
        <ReactRouter.Link
          to='purpose'
          params={{ id: this.state.purpose.id }}
          className={'purpose-list-item label label-' + this._getLabelType()}
          >
          {this.state.purpose.name}
        </ReactRouter.Link>
      );
    }
  });
})();
