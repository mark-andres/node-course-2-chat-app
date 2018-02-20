var expect = require('expect');

var {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        expect(isRealString({})).toBe(false);
        expect(isRealString(true)).toBe(false);
        expect(isRealString(42)).toBe(false);
    });

    it('should reject string with only spaces', () => {
        expect(isRealString('      ')).toBe(false);
    });

    it('should allow strings with non-space characters', () => {
        expect(isRealString('   Hello     ')).toBe(true);
    });
});