import { UnitDetailTable } from "../models/unit-detail.model";

export const ELECTRIC_RESISTANCE_UNIT: UnitDetailTable = {
  id: 'electric resistance',
  name: 'Electric Resistance',
  rows: [
    { id: 'μΩ', label: 'Microohms',   symbol: 'μΩ', toBaseFactor: 1e-6,   value: 0 },
    { id: 'mΩ', label: 'Milliohms',   symbol: 'mΩ', toBaseFactor: 1e-3,   value: 0 },
    { id: 'Ω',  label: 'Ohms',        symbol: 'Ω',  toBaseFactor: 1,      value: 0 },
    { id: 'kΩ', label: 'Kiloohms',    symbol: 'kΩ', toBaseFactor: 1e3,    value: 0 },
    { id: 'MΩ', label: 'Megaohms',    symbol: 'MΩ', toBaseFactor: 1e6,    value: 0 },
  ]
}
