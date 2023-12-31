import canIterate from "../canIterate";
import Character from "../Character";
import Team from "../Team";

describe('canIterate function', () => {
  it('should return true for objects that can be iterated', () => {
    expect(canIterate(new Map())).toBe(true);
    expect(canIterate(new Set())).toBe(true);
    expect(canIterate('Netology')).toBe(true);
  });

  it('should return false for objects that cannot be iterated', () => {
    expect(canIterate(null)).toBe(false);
    expect(canIterate(10)).toBe(false);
  });
});
