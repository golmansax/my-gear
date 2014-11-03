define(['bower/react'], function (React) {
  'use strict';

  return React.createClass({
    getInitialState: function () {
      return this.stateFromProps(this.props);
    },
    componentWillReceiveProps: function (nextProps) {
      this.setState(this.stateFromProps(nextProps));
    },
    stateFromProps: function (props) {
      var state = { model: null, collection: null };

      if (props.modelClass) {
        state.model = new props.modelClass(props.params);
      } else if (props.collectionClass) {
        state.collection = new props.collectionClass();
      }

      return state;
    },
    render: function () {
      return this.props.ctrlClass(this.state);
    }
  });
});
