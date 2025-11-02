export type DateBucket = 'past' | 'today' | 'tomorrow' | 'upcoming';

/**
 * Returns a new Date representing the start of the provided date (midnight, local time).
 */
export function startOfDay(date: Date): Date {
  const normalized = new Date(date);
  normalized.setHours(0, 0, 0, 0);
  return normalized;
}

/**
 * Calculates a DateBucket for scheduling logic (dashboard groupings).
 */
export function getDateBucket(
  dateInput: Date | string,
  referenceInput: Date = new Date(),
): DateBucket {
  const date = typeof dateInput === 'string' ? new Date(dateInput) : new Date(dateInput);
  const reference = new Date(referenceInput);

  const targetStart = startOfDay(date).getTime();
  const referenceStart = startOfDay(reference).getTime();
  const diffInDays = Math.floor((targetStart - referenceStart) / (24 * 60 * 60 * 1000));

  if (diffInDays < 0) {
    return 'past';
  }
  if (diffInDays === 0) {
    return 'today';
  }
  if (diffInDays === 1) {
    return 'tomorrow';
  }
  return 'upcoming';
}

export interface Bucketable {
  dueDate: Date | string;
}

export type BucketizedResult<T extends Bucketable> = Record<DateBucket, T[]>;

/**
 * Utility for grouping objects that expose a `dueDate` into the dashboard buckets.
 */
export function bucketizeByDate<T extends Bucketable>(
  items: readonly T[],
  referenceDate: Date = new Date(),
): BucketizedResult<T> {
  const initial: BucketizedResult<T> = {
    past: [] as T[],
    today: [] as T[],
    tomorrow: [] as T[],
    upcoming: [] as T[],
  };

  return items.reduce<BucketizedResult<T>>((acc, item) => {
    const bucket = getDateBucket(item.dueDate, referenceDate);
    acc[bucket].push(item);
    return acc;
  }, initial);
}
