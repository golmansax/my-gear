//= require components/header

describe('components/header', function () {
  'use strict';

  beforeEach(function () {
    this.sandbox.stub(App.OutfitStore, 'getAll')
      .returns([{ id: 'sexy', name: 'Sexy' }]);

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
