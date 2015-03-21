//= require components/outfit_view
//= require models/outfit_view_model

describe('components/outfit_view', function () {
  'use strict';

  var outfit;

  beforeEach(function () {
    var fixture = MagicLamp.json('outfits/show');
    outfit = new App.OutfitViewModel(fixture);

    this.sandbox.stub(App, 'ClothingItemGrid', TestUtils.MockComponent)
  });

  it('renders a Router Link for each clothing item', function () {
    var outfitView = TestUtils.renderIntoDocument(
      <App.OutfitView outfit={outfit} />
    );

    expect(TestUtils.findRenderedComponentWithType(
      outfitView,
      ReactRouter.Link
    )).to.be.ok();
  });
});
