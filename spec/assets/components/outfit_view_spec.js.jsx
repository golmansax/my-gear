//= require components/outfit_view
//= require models/outfit

describe('components/outfit_view', function () {
  'use strict';

  var outfit;

  beforeEach(function () {
    var fixture = MagicLamp.json('outfits/show');
    outfit = new App.Outfit(fixture, { parse: true });
  });

  it('renders a Router Link for each clothing item', function () {
    var outfitView = TestUtils.renderIntoDocument(
      <App.OutfitView {...outfit.attributes} />
    );

    expect(TestUtils.findRenderedComponentWithType(
      outfitView,
      ReactRouter.Link
    )).to.be.ok();
  });
});
