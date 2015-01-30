//= require components/outfit_view
//= require models/outfit

App.OutfitRoute = (function () {
  'use strict';

  return React.createClass({
    mixins: [ReactRouter.State],

    _getStateFromStore: function (id) {
      return { outfit: App.OutfitStore.get(id) };
    },

    getInitialState: function () {
      return this._getStateFromStore(this.getParams().id);
    },

    componentDidMount: function() {
      App.OutfitStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
      App.OutfitStore.removeChangeListener(this._onChange);
    },

    _onChange: function () {
      this.setState(this._getStateFromStore(this.getParams().id));
    },

    componentWillReceiveProps: function (newProps) {
      if (this.getParams().id !== this.state.outfit.id) {
        this.setState(this._getStateFromStore(this.getParams().id));
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
