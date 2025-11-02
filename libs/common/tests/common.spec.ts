import {
  bucketizeByDate,
  DateBucket,
  getDateBucket,
  startOfDay,
} from '../src/lib/common';

describe('date helpers', () => {
  const reference = new Date('2025-11-03T09:00:00Z');

  it('categorises dates into buckets', () => {
    expect(getDateBucket('2025-11-02T07:00:00Z', reference)).toBe('past');
    expect(getDateBucket('2025-11-03T13:00:00Z', reference)).toBe('today');
    expect(getDateBucket('2025-11-04T00:00:00Z', reference)).toBe('tomorrow');
    expect(getDateBucket('2025-11-06T00:00:00Z', reference)).toBe('upcoming');
  });

  it('bucketises a collection by dueDate', () => {
    const items = [
      { id: 1, dueDate: '2025-11-02T12:00:00Z' },
      { id: 2, dueDate: '2025-11-03T12:00:00Z' },
      { id: 3, dueDate: '2025-11-04T12:00:00Z' },
      { id: 4, dueDate: '2025-11-08T12:00:00Z' },
    ];

    const buckets = bucketizeByDate(items, reference);

    const countsByBucket = Object.entries(buckets).reduce<Record<DateBucket, number>>(
      (acc, [bucket, bucketItems]) => ({
        ...acc,
        [bucket as DateBucket]: bucketItems.length,
      }),
      { past: 0, today: 0, tomorrow: 0, upcoming: 0 },
    );

    expect(countsByBucket).toEqual({
      past: 1,
      today: 1,
      tomorrow: 1,
      upcoming: 1,
    });
  });

  it('normalises a date to start of day', () => {
    const value = new Date('2025-11-03T18:23:11.500Z');
    const normalized = startOfDay(value);
    expect(normalized.getHours()).toBe(0);
    expect(normalized.getMinutes()).toBe(0);
    expect(normalized.getSeconds()).toBe(0);
  });
});
