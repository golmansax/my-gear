define([
  'bower/react', 'bower/react_router', 'components/app',
  'components/wardrobe_manager'
], function (React, Router, App, WardrobeManager) {
  'use strict';

  return Router.Routes(null,
    Router.Route({ handler: App },
      Router.DefaultRoute({ handler: WardrobeManager })
    )
  );
});
