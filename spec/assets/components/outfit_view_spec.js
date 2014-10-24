describe('components/outfit_view', function () {
  it('renders', function () {
    var commentList = TU.renderIntoDocument(new CommentsComponent({
      collection: new CommentsCollection(commentFixtures)
    }));

    var commentList = TU.scryRenderedDOMComponentWithType(commentList, CommentComponent);
    expect(commentList.length).to.be(3);
  });
});
