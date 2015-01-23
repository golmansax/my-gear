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
      return this._stateFromProps(this.props, { initialState: true });
    },

    componentWillReceiveProps: function (nextProps) {
      this.setState(this._stateFromProps(nextProps));
    },

    _stateFromProps: function (props, options) {
      options = options || {};

      var stateCreator;
      if (props.modelClass) {
        stateCreator = this._stateForModel;
      } else {
        stateCreator = this._stateForCollection;
      }

      return stateCreator(props, options);
    },

    _stateForModel: function (props, options) {
      var data = options.initialState ? this.props.data : {};
      data = data || this.getParams();

      return {
        model: new props.modelClass(data, { parse: true }),
        collection: null
      };
    },

    _stateForCollection: function (props) {
      return {
        model: null,
        collection: new props.collectionClass()
      };
    },

    render: function () {
      return <this.props.routeClass {...this.state} />;
    }
  });
})();
