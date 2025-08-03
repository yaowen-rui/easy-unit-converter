import { UnitDetailTable } from "../models/unit-detail.model";

export const ELECTRIC_POTENTIAL_UNIT: UnitDetailTable = {
  id: 'electric potential difference',
  name: 'Electric Potential Difference',
  rows: [
    { id: 'μV', label: 'Microvolts',   symbol: 'μV', toBaseFactor: 1e-6,   value: 0 },
    { id: 'mV', label: 'Millivolts',   symbol: 'mV', toBaseFactor: 1e-3,   value: 0 },
    { id: 'V',  label: 'Volts',        symbol: 'V',  toBaseFactor: 1,      value: 0 },
    { id: 'kV', label: 'Kilovolts',    symbol: 'kV', toBaseFactor: 1e3,    value: 0 },
    { id: 'MV', label: 'Megavolts',    symbol: 'MV', toBaseFactor: 1e6,    value: 0 },
  ]
}
