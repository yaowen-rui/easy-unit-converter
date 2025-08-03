import { UnitDetailTable } from "../models/unit-detail.model"

export const TIME_UNIT: UnitDetailTable = {
  id: 'time',
  name: 'Time',
  rows: [
    { id: 'ms',   label: 'Milliseconds', symbol: 'ms',   toBaseFactor: 0.001,      value: 0 },
    { id: 's',    label: 'Seconds',      symbol: 's',    toBaseFactor: 1,          value: 0 },
    { id: 'min',  label: 'Minutes',      symbol: 'min',  toBaseFactor: 60,         value: 0 },
    { id: 'h',    label: 'Hours',        symbol: 'h',    toBaseFactor: 3600,       value: 0 },
    { id: 'd',    label: 'Days',         symbol: 'd',    toBaseFactor: 86400,      value: 0 },
    { id: 'w',    label: 'Weeks',        symbol: 'w',    toBaseFactor: 604800,     value: 0 },
    { id: 'mo',   label: 'Months',       symbol: 'mo',   toBaseFactor: 2629800,    value: 0 }, // 1 mo = 30.44 days
    { id: 'y',    label: 'Years',        symbol: 'y',    toBaseFactor: 31557600,   value: 0 }, // 1 y = 365.25 days
    { id: 'dec',  label: 'Decades',      symbol: 'dec',  toBaseFactor: 315576000,  value: 0 },
    { id: 'c',    label: 'Centuries',    symbol: 'c',    toBaseFactor: 3155760000, value: 0 },
  ]
}
