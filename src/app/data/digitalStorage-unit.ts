import { UnitDetailTable } from "../models/unit-detail.model";

export const DIGITAL_STORAGE_UNIT: UnitDetailTable = {
  id: 'digital storage',
  name: 'Digital Storage',
  rows: [
    { id: 'b',   label: 'Bits',        symbol: 'b',    toBaseFactor: 0.125,                 value: 0 }, // 1 bit = 1/8 byte
    { id: 'B',   label: 'Bytes',       symbol: 'B',    toBaseFactor: 1,                      value: 0 },
    { id: 'MB',  label: 'Megabytes',   symbol: 'MB',   toBaseFactor: 1e6,                    value: 0 },
    { id: 'MiB', label: 'Mebibytes',   symbol: 'MiB',  toBaseFactor: 1048576,                value: 0 }, // 1024^2
    { id: 'GB',  label: 'Gigabytes',   symbol: 'GB',   toBaseFactor: 1e9,                    value: 0 },
    { id: 'GiB', label: 'Gibibytes',   symbol: 'GiB',  toBaseFactor: 1073741824,             value: 0 }, // 1024^3
    { id: 'TB',  label: 'Terabytes',   symbol: 'TB',   toBaseFactor: 1e12,                   value: 0 },
    { id: 'TiB', label: 'Tebibytes',   symbol: 'TiB',  toBaseFactor: 1099511627776,          value: 0 }, // 1024^4
    { id: 'PB',  label: 'Petabytes',   symbol: 'PB',   toBaseFactor: 1e15,                   value: 0 },
    { id: 'PiB', label: 'Pebibytes',   symbol: 'PiB',  toBaseFactor: 1125899906842624,       value: 0 }, // 1024^5
  ]
}
