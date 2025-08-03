import { UnitDetailTable } from "../models/unit-detail.model";

export const POWER_UNIT: UnitDetailTable = {
  id: 'power',
  name: 'Power',
  rows: [
    { id: 'fW',  label: 'Femtowatts',  symbol: 'fW',   toBaseFactor: 1e-15,     value: 0 },
    { id: 'pW',  label: 'Picowatts',   symbol: 'pW',   toBaseFactor: 1e-12,     value: 0 },
    { id: 'nW',  label: 'Nanowatts',   symbol: 'nW',   toBaseFactor: 1e-9,      value: 0 },
    { id: 'μW',  label: 'Microwatts',  symbol: 'μW',   toBaseFactor: 1e-6,      value: 0 },
    { id: 'mW',  label: 'Milliwatts',  symbol: 'mW',   toBaseFactor: 1e-3,      value: 0 },
    { id: 'W',   label: 'Watts',       symbol: 'W',    toBaseFactor: 1,         value: 0 },
    { id: 'kW',  label: 'Kilowatts',   symbol: 'kW',   toBaseFactor: 1e3,       value: 0 },
    { id: 'MW',  label: 'Megawatts',   symbol: 'MW',   toBaseFactor: 1e6,       value: 0 },
    { id: 'GW',  label: 'Gigawatts',   symbol: 'GW',   toBaseFactor: 1e9,       value: 0 },
    { id: 'TW',  label: 'Terawatts',   symbol: 'TW',   toBaseFactor: 1e12,      value: 0 },
    { id: 'hp',  label: 'Horsepower',  symbol: 'hp',   toBaseFactor: 745.6999,  value: 0 }, // mechanical
  ]
}
