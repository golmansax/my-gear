//= require components/outfit_view
//= require models/outfit

App.OutfitRoute = (function () {
  'use strict';

  return React.createClass({
    propTypes: {
      id: PropTypes.string.isRequired
    },

    _getStateFromStore: function (id) {
      return { outfit: App.OutfitStore.get(id) };
    },

    getInitialState: function () {
      return this._getStateFromStore(this.props.id);
    },

    componentDidMount: function() {
      App.OutfitStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
      App.OutfitStore.removeChangeListener(this._onChange);
    },

    _onChange: function () {
      this.setState(this._getStateFromStore(this.props.id));
    },

    componentWillReceiveProps: function (newProps) {
      if (this.props.id !== this.state.outfit.id) {
        this.setState(this._getStateFromStore(this.props.id));
      }
    },

    render: function () {
      return (
        <div>
          OUTFIT
          <App.OutfitView {...this.state.outfit} />
        </div>
      );
    }
  });
})();
