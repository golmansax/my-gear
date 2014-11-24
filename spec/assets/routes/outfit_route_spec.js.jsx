define([
  'routes/outfit_route', 'support/test_utils', 'components/outfit_view',
  'bower/react'
], function (OutfitRoute, TestUtils, OutfitView, React) {
  'use strict';

  describe('routes/outfit_route', function () {
    beforeEach(function () {
      this.model = {
        fetch: sinon.stub(),
        on: function () { },
        attributes: { hello: 'kitty' }
      };
      this.outfitRoute = TestUtils.renderIntoDocument(
        <OutfitRoute model={this.model} />
      );
    });

    it('fetches model on initialization', function () {
      expect(this.model.fetch).to.have.been.calledWith();
    });

    it('renders OutfitView with the model attributes', function () {
      var outfitView = TestUtils.findRenderedComponentWithType(
        this.outfitRoute,
        OutfitView
      );

      expect(outfitView.props).to.deep.equal({ hello: 'kitty' });
    });
  });
});
