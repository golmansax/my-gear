define([
  'bower/react', 'bower/react_router', 'bower/backbone_mixin', 'components/app', 'components/wardrobe'
], function (React, Router, BackboneMixin, App, Wardrobe) {
  'use strict';

  return React.createClass({
    mixins: [BackboneMixin],
    render: function () {
      var duplicate = this.props.collection[0];
      console.log(duplicate);
      return Router.Routes(null,
        Router.Route({ handler: App },
          Router.DefaultRoute({ handler: Wardrobe, blah: duplicate, ugh: ' Hello' })
        )
      );
    }
  });
});
