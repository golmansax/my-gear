//= require components/outfit_view
//= require models/outfit
//= require mixins/store_watch_mixin
//= require stores/outfit_store

App.OutfitRoute = (function () {
  'use strict';

  return React.createClass({
    mixins: [App.StoreWatchMixin(App.OutfitStore, '_onChange')],

    propTypes: {
      id: PropTypes.string.isRequired
    },

    _getStateFromStore: function (id) {
      return { outfit: App.OutfitStore.get(id) };
    },

    getInitialState: function () {
      return this._getStateFromStore(this.props.id);
    },

    _onChange: function () {
      this.setState(this._getStateFromStore(this.props.id));
    },

    componentWillReceiveProps: function (newProps) {
      if (newProps.id !== this.state.outfit.id) {
        this.setState(this._getStateFromStore(newProps.id));
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
