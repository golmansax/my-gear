define([
  'bower/react', 'bower/backbone_mixin'
], function (React, BackboneMixin) {
  'use strict';

  return React.createClass({
    mixins: [BackboneMixin],
    componentDidMount: function () {
      this.getCollection().fetch();
    },
    createEntry: function (entry) {
      return React.DOM.div({ key: entry.id }, entry.brand + ' ' + entry.model);
    },
    render: function () {
      return React.DOM.div(null,
        'WARDROBE',
        this.props.collection.map(this.createEntry)
      );
    }
  });
});
