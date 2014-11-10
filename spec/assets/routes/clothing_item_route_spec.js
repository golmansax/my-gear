define([
  'routes/clothing_item_route', 'support/test_utils',
  'components/clothing_item_detailed_view'
], function (ClothingItemRoute, TestUtils, ClothingItemDetailedView) {
  'use strict';

  describe('routes/clothing_item_route', function () {
    var model;

    beforeEach(function () {
      model = {
        fetch: sinon.stub(),
        isValid: sinon.stub(),
        on: function () { }
      };
    });

    it('fetches model on initialization', function () {
      TestUtils.renderIntoDocument(ClothingItemRoute({ model: model }));
      expect(model.fetch).to.have.been.calledWith();
    });

    it('renders loading message if model is invalid', function () {
      model.isValid.returns(false);
      var route = TestUtils.renderIntoDocument(
        ClothingItemRoute({ model: model })
      );
      expect(TestUtils.findAllInRenderedTree(route, function (instance) {
        return instance.props.children === 'Loading...';
      })).to.have.length(1);
    });

    it('renders ClothingItemDetailedView if model is valid', function () {
      model.isValid.returns(true);
      var route = TestUtils.renderIntoDocument(
        ClothingItemRoute({ model: model })
      );
      expect(TestUtils.findRenderedComponentWithType(
        route,
        ClothingItemDetailedView
      )).to.be;
    });
  });
});
