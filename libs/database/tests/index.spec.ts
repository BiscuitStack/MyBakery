import { baseSoftDelete } from '../src';

describe('database lib', () => {
  it('provides base soft delete defaults', () => {
    expect(baseSoftDelete.deleted).toBe(false);
    expect(baseSoftDelete.deletedAt).toBeNull();
  });
});
