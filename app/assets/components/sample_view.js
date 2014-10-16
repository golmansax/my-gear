define([
  'react', 'backbone_mixin'
], function (React, BackboneMixin) {
  'use strict';

  return React.createClass({
    mixins: [BackboneMixin],
    createEntry: function (entry) {
      return React.DOM.div({ key: entry.id }, entry.brand + ' ' + entry.model);
    },
    render: function () {
      return React.DOM.div(null,
        this.props.clothingItems.map(this.createEntry)
      );
    }
  });
});
