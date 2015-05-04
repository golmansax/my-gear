//= require support/magic_lamp

describe('support/magic_lamp', function () {
  'use strict';

  beforeEach(function () {
    this.originalCache = MagicLamp.genie.cache;
    MagicLamp.genie.cache = {};
  });

  afterEach(function () {
    MagicLamp.genie.cache = this.originalCache;
  });

  describe('#json', function () {
    it('throws an error when the path has not been loaded', function () {
      expect(function () {
        MagicLamp.json('blah');
      }).to.throw('The following path has not been loaded yet: blah');
    });

    it('parses the cached value for the path', function () {
      MagicLamp.genie.cache.hello = '{"a":["b"]}';
      expect(MagicLamp.json('hello')).to.deep.equal({ a: ['b'] });
    });
  });

  describe('#rawJson', function () {
    it('throws an error when the path has not been loaded', function () {
      expect(function () {
        MagicLamp.rawJson('blah');
      }).to.throw('The following path has not been loaded yet: blah');
    });
  });
});
