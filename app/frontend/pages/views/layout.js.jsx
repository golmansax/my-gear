//= require data_loading/flux/actions
//= require data_loading/flux/store
//= require shared/views/header

App.Pages.Layout = (function () {
  'use strict';

  return React.createClass({
    mixins: [
      React.BindMixin(App.DataLoading.Store, 'getStateFromStore')
    ],

    getStateFromStore: function () {
      return { isLoading: App.DataLoading.Store.isLoading() };
    },

    componentWillMount: function () {
      App.DataLoading.Actions.fetchAll();
      this.setState(this.getStateFromStore());
    },

    _renderContent: function () {
      if (this.state.isLoading) {
        return <div>Loading...</div>;
      }

      return this.props.children;
    },

    render: function () {
      return (
        <div>
          <App.Shared.Header />
          <div className='container'>{this._renderContent()}</div>
        </div>
      );
    }
  });
})();
