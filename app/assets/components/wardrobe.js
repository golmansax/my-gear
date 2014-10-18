define([
  'bower/react', 'bower/backbone_mixin'
], function (React, BackboneMixin) {
  'use strict';

  return React.createClass({
    createEntry: function (entry) {
      return React.DOM.div({ key: entry.id }, entry.brand + ' ' + entry.model);
    },
    render: function () {
      console.log(this.props.blah);
      return React.DOM.div(null,
        'WARDROBE',
        //this.props.collection.map(this.createEntry)
        this.props.blah ? this.createEntry(this.props.blah) : '',
        this.props.ugh
      );
    }
  });
});
