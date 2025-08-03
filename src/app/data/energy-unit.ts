import { UnitDetailTable } from "../models/unit-detail.model";
export const ENERGY_UNIT: UnitDetailTable = {
  id: 'energy',
  name: 'Energy',
  rows: [
    { id: 'J',     label: 'Joules',         symbol: 'J',    toBaseFactor: 1,            value: 0 },
    { id: 'kJ',    label: 'Kilojoules',     symbol: 'kJ',   toBaseFactor: 1000,         value: 0 },
    { id: 'cal',   label: 'Calories',       symbol: 'cal',  toBaseFactor: 4.184,        value: 0 }, // thermochemical calorie
    { id: 'kcal',  label: 'Kilocalories',   symbol: 'kcal', toBaseFactor: 4184,         value: 0 },
    { id: 'kWh',   label: 'Kilowatt Hours', symbol: 'kWh',  toBaseFactor: 3_600_000,    value: 0 },
  ]
}
