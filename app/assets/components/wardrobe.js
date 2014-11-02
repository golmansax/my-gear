define(['bower/react', 'bower/react_router'], function (React, Router) {
  'use strict';

  return React.createBackboneClass({
    componentDidMount: function () {
      this.getCollection().fetch();
    },
    createEntry: function (entry) {
      var myId = entry.get('id');
      var imageAttrs = {
        className: 'img-responsive',
        src: entry.get('image_path')
      };

      return React.DOM.div({ key: myId, className: 'col-sm-4' },
        React.DOM.img(imageAttrs),
        Router.Link({ to: 'clothing_item', params: { clothingItemId: myId }},
          entry.get('brand') + ' ' + entry.get('model')
        )
      );
    },
    render: function () {
      return React.DOM.div({ className: 'row' },
        this.getCollection().map(this.createEntry)
      );
    }
  });
});
