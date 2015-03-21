//= require components/clothing_item_view
//= require models/clothing_item_view_model

describe('components/clothing_item_view', function () {
  'use strict';

  beforeEach(function () {
    this.sandbox.useFakeServer();
    var fixture = MagicLamp.json('clothing_items/show');
    this.id = fixture.clothingItem.id;
  });

  it('renders', function () {
    TestUtils.renderIntoDocument(<App.ClothingItemView id={this.id} />);
  });
});
