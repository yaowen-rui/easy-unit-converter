import { UnitDetailTable } from "../models/unit-detail.model";

export const BASE_UNIT:UnitDetailTable = {
  id: 'base',
  name: 'Base',
  rows: [
    //needs special handling for conversion
    { id: 'bin',  label: 'Binary',       symbol: ' ', toBaseFactor: 1, value: 0 },
    { id: 'oct',  label: 'Octal',        symbol: ' ', toBaseFactor: 1, value: 0 },
    { id: 'dec',  label: 'Decimal',      symbol: ' ',   toBaseFactor: 1, value: 0 },
    { id: 'hex',  label: 'Hexadecimal',  symbol: ' ', toBaseFactor: 1, value: 0 },
  ]
}
