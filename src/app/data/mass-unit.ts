import { UnitDetailTable } from "../models/unit-detail.model";

export const MASS_UNIT: UnitDetailTable = {
  id: 'mass',
  name: 'Mass',
  rows: [
    { id: 'ng',    label: 'Nanograms',        symbol: 'ng',     toBaseFactor: 1e-12,            value: 0 },
    { id: 'pg',    label: 'Picograms',        symbol: 'pg',     toBaseFactor: 1e-15,           value: 0 },
    { id: 'μg',    label: 'Micrograms',       symbol: 'μg',     toBaseFactor: 1e-9,            value: 0 },
    { id: 'mg',    label: 'Milligrams',       symbol: 'mg',     toBaseFactor: 1e-6,            value: 0 },
    { id: 'cg',    label: 'Centigrams',       symbol: 'cg',     toBaseFactor: 1e-5,            value: 0 },
    { id: 'dg',    label: 'Decigrams',        symbol: 'dg',     toBaseFactor: 1e-4,            value: 0 },
    { id: 'g',     label: 'Grams',            symbol: 'g',      toBaseFactor: 1e-3,            value: 0 },
    { id: 'kg',    label: 'Kilograms',        symbol: 'kg',     toBaseFactor: 1,               value: 0 },
    { id: 't',     label: 'Metric Tons',      symbol: 't',      toBaseFactor: 1e3,             value: 0 },
    { id: 'catty', label: 'Market Catties',   symbol: '',       toBaseFactor: 0.5,             value: 0 }, // 1 catty = 0.5 kg
    { id: 'tael',  label: 'Market Taels',     symbol: '',       toBaseFactor: 0.05,            value: 0 }, // 1 tael = 0.05 kg
    { id: 'ct',    label: 'Carats',           symbol: 'ct',     toBaseFactor: 0.0002,          value: 0 },
    { id: 'oz',    label: 'Ounces',           symbol: 'oz',     toBaseFactor: 0.028349523125,  value: 0 },
    { id: 'oz t',  label: 'Ounces Troy',      symbol: 'oz t',   toBaseFactor: 0.0311034768,    value: 0 },
    { id: 'slug',  label: 'Slugs',            symbol: 'slug',   toBaseFactor: 14.59390294,     value: 0 },
    { id: 'lb',    label: 'Pounds',           symbol: 'lb',     toBaseFactor: 0.45359237,      value: 0 },
  ]
}
