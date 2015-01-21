//= require components/clothing_item_detailed_view

describe('components/clothing_item_detailed_view', function () {
  'use strict';

  var clothingItem;

  beforeEach(function () {
    var fixture = MagicLamp.json('clothing_items/show');
    clothingItem = new App.ClothingItem(fixture, { parse: true });
  });

  it('renders', function () {
    TestUtils.renderIntoDocument(
      <App.ClothingItemDetailedView {...clothingItem.attributes} />
    );
  });
});
