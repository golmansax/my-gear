//= require components/clothing_item_view

describe('components/clothing_item_view', function () {
  'use strict';

  beforeEach(function () {
    var fixture = MagicLamp.json('clothing_items/show');
    this.clothingItem = new App.ClothingItem(fixture, { parse: true });
  });

  it('renders', function () {
    TestUtils.renderIntoDocument(
      <App.ClothingItemView {...this.clothingItem.attributes} />
    );
  });
});
