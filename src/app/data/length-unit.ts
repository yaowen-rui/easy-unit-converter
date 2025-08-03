import { UnitDetailTable } from './../models/unit-detail.model';

export const LENGTH_UNIT: UnitDetailTable = {
  id:'length',
  name:'Length',
  rows:[
    { id: 'pm',  label: 'Picometers',     symbol: 'pm',   toBaseFactor: 1e-12,      value: 0 },
    { id: 'nm',  label: 'Nanometers',     symbol: 'nm',   toBaseFactor: 1e-9,       value: 0 },
    { id: 'μm',  label: 'Micrometers',    symbol: 'μm',   toBaseFactor: 1e-6,       value: 0 },
    { id: 'mm',  label: 'Millimeters',    symbol: 'mm',   toBaseFactor: 1e-3,       value: 0 },
    { id: 'cm',  label: 'Centimeters',    symbol: 'cm',   toBaseFactor: 1e-2,       value: 0 },
    { id: 'dm',  label: 'Decimeters',     symbol: 'dm',   toBaseFactor: 1e-1,       value: 0 },
    { id: 'm',   label: 'Meters',         symbol: 'm',    toBaseFactor: 1,          value: 0 },
    { id: 'km',  label: 'Kilometers',     symbol: 'km',   toBaseFactor: 1e3,        value: 0 },
    { id: 'in',  label: 'Inches',         symbol: 'in',   toBaseFactor: 0.0254,     value: 0 },
    { id: 'ft',  label: 'Feet',           symbol: 'ft',   toBaseFactor: 0.3048,     value: 0 },
    { id: 'yd',  label: 'Yards',          symbol: 'yd',   toBaseFactor: 0.9144,     value: 0 },
    { id: 'mi',  label: 'Miles',          symbol: 'mi',   toBaseFactor: 1609.344,   value: 0 },
    { id: 'nmi', label: 'Nautical Miles', symbol: 'nmi',  toBaseFactor: 1852,       value: 0 },
    { id: 'ly',  label: 'Lightyears',     symbol: 'ly',   toBaseFactor: 9.4607e15,  value: 0 },
  ]
}
