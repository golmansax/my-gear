define([
  'backbone', 'react', 'backbone_mixin'
], function (Backbone, React, BackboneMixin) {
  'use strict';

  return React.createClass({
    mixins: [BackboneMixin],
    componentDidMount: function () {
      this.props.collection.fetch();
    },
    createEntry: function (entry) {
      return React.DOM.div(null, entry.brand + entry.model);
    },
    render: function () {
      return React.DOM.div(null,
        this.props.collection.map(this.createEntry)
      );
    }
  });
});
