//= require routes/backbone_route

describe('routes/backbone_route', function () {
  'use strict';

  describe('when modelClass is in props', function () {
    var params, model, modelClass, route;

    beforeEach(function () {
      params = { hola: 'chao' };
      model = {};
      modelClass = sinon.stub().withArgs(params).returns(model);

      route = TestUtils.renderIntoDocument(
        <App.BackboneRoute modelClass={modelClass}
            routeClass={TestUtils.MockComponent} />
      );
    });

    it('attaches an instance of the modelClass to the state', function () {
      expect(route.state.model).to.equal(model);
      expect(modelClass.called).to.be.true();
    });

    it('renders the routeClass', function () {
      expect(
        TestUtils.findRenderedComponentWithType(route, TestUtils.MockComponent)
      ).to.be.ok();
    });

    it('switches state when props are changed', function () {
      var collection = {};
      var collectionClass = sinon.stub().withArgs(params).returns(collection);

      route.replaceProps({
        collectionClass: collectionClass,
        routeClass: TestUtils.MockComponent
      });
      expect(route.state.model).not.to.be.ok();
      expect(route.state.collection).to.equal(collection);
    });
  });

  it('attaches an instance of the collectionClass to the state', function () {
    var params = { hola: 'chao' };
    var collection = {};
    var collectionClass = sinon.stub().withArgs(params).returns(collection);
    var routeAttrs = {
      collectionClass: collectionClass,
      routeClass: TestUtils.MockComponent
    };

    var route = TestUtils.renderIntoDocument(
      <App.BackboneRoute {...routeAttrs} />
    );
    expect(route.state.collection).to.equal(collection);
    expect(collectionClass.called).to.be.true();
  });

  it('throws an error if both model and collection specified', function () {
    var badAttrs = {
      modelClass: this.sandbox.stub(),
      collectionClass: this.sandbox.stub(),
      routeClass: TestUtils.MockComponent
    };

    expect(function () {
      TestUtils.renderIntoDocument(<App.BackboneRoute {...badAttrs} />);
    }).to.throw('Both model and collection are defined');
  });

  it('throws an error if neither model nor collection', function () {
    expect(function () {
      TestUtils.renderIntoDocument(
        <App.BackboneRoute routeClass={TestUtils.MockComponent} />
      );
    }).to.throw('Neither model nor collection is defined');
  });
});
