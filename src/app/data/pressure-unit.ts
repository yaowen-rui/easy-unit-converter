import { UnitDetailTable } from "../models/unit-detail.model";
export const PRESSURE_UNIT: UnitDetailTable = {
  id: 'pressure',
  name: 'Pressure',
  rows: [
    { id: 'psi',    label: 'Pounds Force per Square Inch', symbol: 'psi',   toBaseFactor: 6894.757,      value: 0 },
    { id: 'mmHg',   label: 'Millimeters of Mercury',       symbol: 'mmHg',  toBaseFactor: 133.3224,      value: 0 },
    { id: 'hPa',    label: 'Hectopascals',                 symbol: 'hPa',   toBaseFactor: 100,           value: 0 },
    { id: 'kPa',    label: 'Kilopascals',                  symbol: 'kPa',   toBaseFactor: 1000,          value: 0 },
    { id: 'MPa',    label: 'Megapascals',                  symbol: 'MPa',   toBaseFactor: 1e6,           value: 0 },
    { id: 'GPa',    label: 'Gigapascals',                  symbol: 'GPa',   toBaseFactor: 1e9,           value: 0 },
    { id: 'bar',    label: 'Bars',                         symbol: 'bar',   toBaseFactor: 100000,        value: 0 },
    { id: 'mbar',   label: 'Millibars',                    symbol: 'mbar',  toBaseFactor: 100,           value: 0 },
    { id: 'inHg',   label: 'Inches of Mercury',            symbol: 'inHg',  toBaseFactor: 3386.389,      value: 0 },
    { id: 'Pa',     label: 'Pascals',                      symbol: 'Pa',    toBaseFactor: 1,             value: 0 }, // 1 Pascal
  ]
}
