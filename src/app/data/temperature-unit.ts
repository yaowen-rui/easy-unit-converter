import { UnitDetailTable } from "../models/unit-detail.model"

export const TEMPERATURE_UNIT: UnitDetailTable = {
  id: 'temperature',
  name: 'Temperature',
  rows: [
    { id: 'K',   label: 'Kelvin',      symbol: 'K',   toBaseFactor: 1,    value: 0 }, // SI base
    { id: '°C',  label: 'Celsius',     symbol: '°C',  toBaseFactor: 1,    value: 0 }, // Special formula needed
    { id: '°F',  label: 'Fahrenheit',  symbol: '°F',  toBaseFactor: 1,    value: 0 }, // Special formula needed
  ]
}
