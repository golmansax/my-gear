define(['objects/window'], function (localWindow) {
  'use strict';

  describe('objects/window', function () {
    it('returns the global window object', function () {
      /* global window */
      expect(localWindow).to.equal(window);
    });
  });
});
