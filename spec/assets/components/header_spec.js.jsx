//= require components/header

describe('components/header', function () {
  'use strict';

  beforeEach(function () {
    this.outfitsMock = new TestUtils.MockCollection([
      { id: 'sexy', name: 'Sexy' }
    ]);
    this.sandbox.stub(this.outfitsMock, 'fetch');

    this.header = TestUtils.renderIntoDocument(
      <App.Header collection={this.outfitsMock} />
    );
  });

  it('fetches the collection', function () {
    expect(this.outfitsMock.fetch.called).to.be.true();
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
