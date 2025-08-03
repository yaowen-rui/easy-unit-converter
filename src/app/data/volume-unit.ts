import { UnitDetailTable } from "../models/unit-detail.model"

export const VOLUME_UNIT: UnitDetailTable = {
  id: 'volume',
  name: 'Volume',
  rows: [
    { id: 'cm³',   label: 'Cubic Centimeters',   symbol: 'cm³',   toBaseFactor: 1e-6,              value: 0 },
    { id: 'ml',    label: 'Milliliters',         symbol: 'ml',    toBaseFactor: 1e-6,              value: 0 }, // 1 ml = 1 cm³
    { id: 'cl',    label: 'Centiliters',         symbol: 'cl',    toBaseFactor: 1e-5,              value: 0 },
    { id: 'dl',    label: 'Deciliters',          symbol: 'dl',    toBaseFactor: 1e-4,              value: 0 },
    { id: 'l',     label: 'Liters',              symbol: 'l',     toBaseFactor: 1e-3,              value: 0 },
    { id: 'dm³',   label: 'Cubic Decimeters',    symbol: 'dm³',   toBaseFactor: 1e-3,              value: 0 }, // 1 dm³ = 1 l
    { id: 'm³',    label: 'Cubic Meters',        symbol: 'm³',    toBaseFactor: 1,                 value: 0 },
    { id: 'km³',   label: 'Cubic Kilometers',    symbol: 'km³',   toBaseFactor: 1e9,               value: 0 },
    { id: 'in³',   label: 'Cubic Inches',        symbol: 'in³',   toBaseFactor: 1.6387064e-5,      value: 0 },
    { id: 'ft³',   label: 'Cubic Feet',          symbol: 'ft³',   toBaseFactor: 0.028316846592,    value: 0 },
    { id: 'yd³',   label: 'Cubic Yards',         symbol: 'yd³',   toBaseFactor: 0.764554857984,    value: 0 },
    { id: 'mi³',   label: 'Cubic Miles',         symbol: 'mi³',   toBaseFactor: 4.16818183e9,      value: 0 },
    { id: 'gal',   label: 'Imperial Gallons',    symbol: 'gal',   toBaseFactor: 0.00454609,        value: 0 },
    { id: 'usgal', label: 'US Gallons',          symbol: 'gal',   toBaseFactor: 0.003785411784,    value: 0 },
  ]
}
