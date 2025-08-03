import { UnitDetailTable } from "../models/unit-detail.model"

export const SPEED_UNIT: UnitDetailTable = {
  id: 'speed',
  name: 'Speed',
  rows: [
    { id: 'm/s',   label: 'Meters per second',     symbol: 'm/s',   toBaseFactor: 1,           value: 0 },
    { id: 'km/h',  label: 'Kilometers per hour',   symbol: 'km/h',  toBaseFactor: 0.277777778, value: 0 }, // 1 km/h = 1/3.6 m/s
    { id: 'mph',   label: 'Miles per hour',        symbol: 'mph',   toBaseFactor: 0.44704,     value: 0 },
    { id: 'kn',    label: 'Knots',                 symbol: 'kn',    toBaseFactor: 0.514444,    value: 0 },
    { id: 'c',     label: 'Speed of light',        symbol: 'c',     toBaseFactor: 299792458,   value: 0 },
    { id: 'M',     label: 'Mach',                  symbol: 'M',     toBaseFactor: 340.29,      value: 0 }, // at 15°C, sea level
  ]
}
