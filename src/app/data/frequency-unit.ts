import { UnitDetailTable } from "../models/unit-detail.model";

export const FREQUENCY_UNIT : UnitDetailTable = {
  id: 'frequency',
  name: 'Frequency',
  rows: [
    { id: 'nHz',  label: 'Nanohertz',   symbol: 'nHz',  toBaseFactor: 1e-9,    value: 0 },
    { id: 'μHz',  label: 'Microhertz',  symbol: 'μHz',  toBaseFactor: 1e-6,    value: 0 },
    { id: 'mHz',  label: 'Millihertz',  symbol: 'mHz',  toBaseFactor: 1e-3,    value: 0 },
    { id: 'Hz',   label: 'Hertz',       symbol: 'Hz',   toBaseFactor: 1,       value: 0 },
    { id: 'kHz',  label: 'Kilohertz',   symbol: 'kHz',  toBaseFactor: 1e3,     value: 0 },
    { id: 'MHz',  label: 'Megahertz',   symbol: 'MHz',  toBaseFactor: 1e6,     value: 0 },
    { id: 'GHz',  label: 'Gigahertz',   symbol: 'GHz',  toBaseFactor: 1e9,     value: 0 },
    { id: 'THz',  label: 'Terahertz',   symbol: 'THz',  toBaseFactor: 1e12,    value: 0 },
  ]
}
