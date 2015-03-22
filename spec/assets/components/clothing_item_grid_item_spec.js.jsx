//= require components/clothing_item_grid_item
//= require stores/clothing_item_store
//= require actions/clothing_item_actions
//= require models/clothing_item_view_model

describe('components/clothing_item_grid_item', function () {
  'use strict';

  beforeEach(function () {
    this.sandbox.useFakeServer();
    var fixture = MagicLamp.json('clothing_items/show');
    this.id = fixture.id;

    this.sandbox.stub(App.ClothingItemStore, 'get')
      .withArgs(this.id)
      .returns(new App.ClothingItemViewModel(fixture));

    this.sandbox.stub(App.ClothingItemActions, 'fetch');
  });

  it('renders', function () {
    TestUtils.renderIntoDocument(<App.ClothingItemGridItem id={this.id} />);
  });
});
