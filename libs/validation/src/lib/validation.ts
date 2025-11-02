export type ValidationIssueCode =
  | 'required'
  | 'invalid_type'
  | 'invalid_enum'
  | 'invalid_format'
  | 'too_small'
  | 'too_large';

export interface ValidationIssue {
  field: string;
  code: ValidationIssueCode;
  message: string;
}

export type ValidationResult<T> =
  | { success: true; data: T }
  | { success: false; issues: ValidationIssue[] };

export type Schema<T> = {
  [K in keyof T]: ValidationRule;
};

type PrimitiveType = 'string' | 'number' | 'boolean';

export type ValidationRule =
  | {
      type: PrimitiveType;
      nullable?: boolean;
      min?: number;
      max?: number;
      enum?: readonly (string | number | boolean)[];
      pattern?: RegExp;
      trim?: boolean;
    }
  | {
      type: 'uuid';
      nullable?: boolean;
    };

const UUID_REGEX =
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export function validate<T extends Record<string, unknown>>(
  payload: Record<string, unknown>,
  schema: Schema<T>,
): ValidationResult<T> {
  const issues: ValidationIssue[] = [];
  const output: Record<string, unknown> = {};

  for (const [field, rule] of Object.entries(schema) as [
    keyof T,
    ValidationRule,
  ][]) {
    const value = payload[field as string];

    if (value === undefined || value === null) {
      if (rule.nullable) {
        output[field as string] = value ?? null;
        continue;
      }
      issues.push(createIssue(field as string, 'required', 'Value is required'));
      continue;
    }

    if (rule.type === 'uuid') {
      if (typeof value !== 'string') {
        issues.push(
          createIssue(field as string, 'invalid_type', 'Expected a UUID string'),
        );
        continue;
      }
      if (!UUID_REGEX.test(value)) {
        issues.push(
          createIssue(field as string, 'invalid_format', 'Invalid UUID v4 format'),
        );
        continue;
      }
      output[field as string] = value;
      continue;
    }

    if (!isPrimitiveOfType(value, rule.type)) {
      issues.push(
        createIssue(
          field as string,
          'invalid_type',
          `Expected type ${rule.type}`,
        ),
      );
      continue;
    }

    let normalisedValue = value as string | number | boolean;

    if (rule.type === 'string' && rule.trim) {
      normalisedValue = (normalisedValue as string).trim();
    }

    if (rule.enum && !rule.enum.includes(normalisedValue)) {
      issues.push(
        createIssue(
          field as string,
          'invalid_enum',
          `Value must be one of: ${rule.enum.join(', ')}`,
        ),
      );
    }

    if (rule.type === 'string') {
      if (rule.pattern && !rule.pattern.test(normalisedValue as string)) {
        issues.push(
          createIssue(
            field as string,
            'invalid_format',
            'Value does not match required pattern',
          ),
        );
      }
      const strValue = normalisedValue as string;
      if (rule.min !== undefined && strValue.length < rule.min) {
        issues.push(
          createIssue(
            field as string,
            'too_small',
            `Length must be >= ${rule.min}`,
          ),
        );
      }
      if (rule.max !== undefined && strValue.length > rule.max) {
        issues.push(
          createIssue(
            field as string,
            'too_large',
            `Length must be <= ${rule.max}`,
          ),
        );
      }
    }

    if (rule.type === 'number') {
      const numericValue = normalisedValue as number;
      if (rule.min !== undefined && numericValue < rule.min) {
        issues.push(
          createIssue(
            field as string,
            'too_small',
            `Value must be >= ${rule.min}`,
          ),
        );
      }
      if (rule.max !== undefined && numericValue > rule.max) {
        issues.push(
          createIssue(
            field as string,
            'too_large',
            `Value must be <= ${rule.max}`,
          ),
        );
      }
    }

    output[field as string] = normalisedValue;
  }

  if (issues.length > 0) {
    return { success: false, issues };
  }

  return { success: true, data: output as T };
}

function isPrimitiveOfType(value: unknown, type: PrimitiveType): boolean {
  return typeof value === type;
}

function createIssue(
  field: string,
  code: ValidationIssueCode,
  message: string,
): ValidationIssue {
  return { field, code, message };
}
