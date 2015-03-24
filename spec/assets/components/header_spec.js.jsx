//= require components/header
//= require models/outfit_view_model

describe('components/header', function () {
  'use strict';

  beforeEach(function () {
    var viewModels = new Immutable.List();
    var viewModel = new App.OutfitViewModel({ id: 'sexy', name: 'Sexy' });
    viewModels = viewModels.push(viewModel);
    this.sandbox.stub(App.OutfitStore, 'getAll').returns(viewModels)
    this.sandbox.useFakeServer();

    this.header = TestUtils.renderIntoDocument(<App.Header />);
  });

  it('has a Router.Link for each outfit', function () {
    var dropdownButton = TestUtils.findRenderedComponentWithType(
      this.header,
      ReactBootstrap.DropdownButton
    );

    expect(TestUtils.findRenderedComponentWithType(
      dropdownButton,
      ReactRouter.Link
    )).to.be.ok();
  });
});
