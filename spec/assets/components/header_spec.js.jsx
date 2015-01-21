//= require components/header

describe('components/header', function () {
  'use strict';

  beforeEach(function () {
    this.outfitsMock = [{ attributes: { id: 'sexy', name: 'Sexy' } }];
    _(this.outfitsMock).extend({ fetch: sinon.stub(), on: sinon.stub() });

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
