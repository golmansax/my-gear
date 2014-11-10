define(['objects/jquery_mock'], function (jQueryMock) {
  'use strict';

  describe('objects/jquery_mock', function () {
    it('defines an ajax function', function () {
      expect(jQueryMock).to.respondTo('ajax');
    });
  });
});
