define(['support/magic_lamp'], function (MagicLamp) {
  'use strict';

  describe('support/magic_lamp', function () {
    describe('#json', function () {
      beforeEach(function () {
        this.originalCache = MagicLamp.genie.cache;
        MagicLamp.genie.cache = {};
      });

      afterEach(function () {
        MagicLamp.genie.cache = this.originalCache;
      });

      it('throws an error when the path has not been loaded', function () {
        expect(function () {
          MagicLamp.json('blah');
        }).to.throw('The following path has not been loaded yet: blah');
      });

      it('parses the cached value for the path', function () {
        MagicLamp.genie.cache['hello'] = '{"a":["b"]}';
        expect(MagicLamp.json('hello')).to.deep.equal({ a: ['b'] });
      });
    });
  });
});
