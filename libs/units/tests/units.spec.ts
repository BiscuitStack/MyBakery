import {
  canConvert,
  convertUnit,
  getUnitCategory,
  listUnitsByCategory,
} from '@bakewise/units';

describe('units conversions', () => {
  it('converts mass units via base factors', () => {
    expect(convertUnit(1000, 'g', 'kg')).toBe(1);
    expect(convertUnit(2, 'kg', 'g')).toBe(2000);
  });

  it('throws when categories mismatch', () => {
    expect(() => convertUnit(1, 'g', 'ml')).toThrow(/incompatible unit categories/);
  });

  it('exposes unit categories and lists per category', () => {
    expect(getUnitCategory('ml')).toBe('volume');
    expect(listUnitsByCategory('mass')).toEqual(expect.arrayContaining(['g', 'kg', 'mg']));
    expect(canConvert('l', 'ml')).toBe(true);
    expect(canConvert('unit', 'kg')).toBe(false);
  });
});
