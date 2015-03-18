//= require components/clothing_item_detailed_view
//= require models/clothing_item_view_model

describe('components/clothing_item_detailed_view', function () {
  'use strict';

  var clothingItem;

  beforeEach(function () {
    var fixture = MagicLamp.json('clothing_items/show');
    clothingItem = new App.ClothingItemViewModel(fixture);
  });

  it('renders', function () {
    TestUtils.renderIntoDocument(
      <App.ClothingItemDetailedView clothingItem={clothingItem} />
    );
  });
});
