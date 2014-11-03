define(['objects/jquery_fake'], function (jQueryFake) {
  'use strict';

  describe('objects/jquery_fake', function () {
    it('defines an ajax function', function () {
      expect(jQueryFake).to.respondTo('ajax');
    });
  });
});
