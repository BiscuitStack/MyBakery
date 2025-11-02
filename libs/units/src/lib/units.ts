export type UnitCategory = 'mass' | 'volume' | 'count';

export type Unit =
  | 'g'
  | 'kg'
  | 'mg'
  | 'ml'
  | 'l'
  | 'unit'; // discrete items (e.g., eggs, cakes)

type UnitDefinition = {
  category: UnitCategory;
  /**
   * Factor to convert the unit to its category base unit.
   * Base units: gram (mass), milliliter (volume), unit (count).
   */
  toBaseFactor: number;
};

const UNIT_DEFINITIONS: Record<Unit, UnitDefinition> = {
  g: { category: 'mass', toBaseFactor: 1 },
  kg: { category: 'mass', toBaseFactor: 1000 },
  mg: { category: 'mass', toBaseFactor: 0.001 },
  ml: { category: 'volume', toBaseFactor: 1 },
  l: { category: 'volume', toBaseFactor: 1000 },
  unit: { category: 'count', toBaseFactor: 1 },
};

export function getUnitCategory(unit: Unit): UnitCategory {
  return UNIT_DEFINITIONS[unit].category;
}

export function canConvert(from: Unit, to: Unit): boolean {
  return getUnitCategory(from) === getUnitCategory(to);
}

export function convertUnit(value: number, from: Unit, to: Unit): number {
  if (!canConvert(from, to)) {
    throw new Error(`Cannot convert from ${from} to ${to}; incompatible unit categories.`);
  }

  const fromDef = UNIT_DEFINITIONS[from];
  const toDef = UNIT_DEFINITIONS[to];

  const valueInBase = value * fromDef.toBaseFactor;
  return valueInBase / toDef.toBaseFactor;
}

export function listUnitsByCategory(category: UnitCategory): Unit[] {
  return Object.entries(UNIT_DEFINITIONS)
    .filter(([, def]) => def.category === category)
    .map(([unit]) => unit as Unit);
}
