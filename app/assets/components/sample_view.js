require([
  'backbone', 'react', 'backbone_mixin'
], function (Backbone, React, BackboneMixin) {
  'use strict';

  return React.createClass({
    mixins: [BackboneMixin],
    createEntry: function (entry) {
      return React.div(null, entry.brand + entry.model);
    },
    render: function () {
      return React.div(null,
        this.props.clothingItems.map(this.createEntry)
      );
    }
  });
});
