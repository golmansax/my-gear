define([
  'bower/react_router', 'collections/clothing_item_list', 'components/app',
  'components/wrapper'
], function (Router, ClothingItemList, App, Wrapper) {
  'use strict';

  return Router.Routes(null,
    Router.Route({ handler: App },
      Router.DefaultRoute({ handler: Wrapper })
    )
  );
});
