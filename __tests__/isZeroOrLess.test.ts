import isZeroOrLess from '../src/index';

describe('isZeroOrLess', () => {
    it('returns true for zero', () => {
        expect(isZeroOrLess(0)).toBe(true);
    });

    it('returns true for negative numbers', () => {
        expect(isZeroOrLess(-5)).toBe(true);
        expect(isZeroOrLess(-1)).toBe(true);
        expect(isZeroOrLess(-100)).toBe(true);
    });

    it('returns false for positive numbers', () => {
        expect(isZeroOrLess(10)).toBe(false);
        expect(isZeroOrLess(1)).toBe(false);
        expect(isZeroOrLess(100)).toBe(false);
    });
}); 