export interface RoutingKeyParts {
  context: string;
  entity: string;
  event: string;
  version: number;
}

const ROUTING_KEY_PREFIX = 'bakewise';
const ROUTING_KEY_REGEX =
  /^bakewise\.([a-z0-9-]+)\.([a-z0-9-]+)\.([a-z0-9-]+)\.v(\d+)$/;

export function buildRoutingKey(parts: RoutingKeyParts): string {
  const { context, entity, event, version } = parts;

  validateSegment(context, 'context');
  validateSegment(entity, 'entity');
  validateSegment(event, 'event');
  if (!Number.isInteger(version) || version < 1) {
    throw new Error('Version must be a positive integer');
  }

  return `${ROUTING_KEY_PREFIX}.${context}.${entity}.${event}.v${version}`;
}

export function parseRoutingKey(key: string): RoutingKeyParts | null {
  const match = ROUTING_KEY_REGEX.exec(key);
  if (!match) {
    return null;
  }

  const [, context, entity, event, version] = match;
  return {
    context,
    entity,
    event,
    version: Number.parseInt(version, 10),
  };
}

export function assertRoutingKey(key: string): RoutingKeyParts {
  const parts = parseRoutingKey(key);
  if (!parts) {
    throw new Error(
      `Routing key "${key}" does not match ${ROUTING_KEY_PREFIX}.<context>.<entity>.<event>.v<version>`,
    );
  }
  return parts;
}

function validateSegment(segment: string, label: string) {
  if (!segment || !/^[a-z0-9-]+$/.test(segment)) {
    throw new Error(
      `${label} must be lowercase alphanumeric with dashes; received "${segment}"`,
    );
  }
}
