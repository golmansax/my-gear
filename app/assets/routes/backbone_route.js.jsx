App.BackboneRoute = (function () {
  'use strict';

  return React.createClass({
    propTypes: {
      routeClass: PropTypes.func.isRequired,
      modelClass: PropTypes.func,
      collectionClass: PropTypes.func,
      modelXorCollection: function (props) {
        var modelClass = props.modelClass;
        var collectionClass = props.collectionClass;

        if (modelClass && collectionClass) {
          return new Error('Both model and collection are defined');
        } else if (!modelClass && !collectionClass) {
          return new Error('Neither model nor collection is defined');
        }
      }
    },
    mixins: [ReactRouter.State],
    getInitialState: function () {
      return this.stateFromProps(this.props);
    },
    componentWillReceiveProps: function (nextProps) {
      this.setState(this.stateFromProps(nextProps));
    },
    stateFromProps: function (props) {
      var state = { model: null, collection: null };

      if (props.modelClass) {
        state.model = new props.modelClass(this.getParams());
      } else {
        state.collection = new props.collectionClass();
      }

      return state;
    },
    render: function () {
      return <this.props.routeClass {...this.state} />;
    }
  });
})();
