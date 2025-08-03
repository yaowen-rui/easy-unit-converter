import { UnitDetailTable } from "../models/unit-detail.model";

export const ANGLE_UNIT: UnitDetailTable = {
  id: 'angle',
  name: 'Angle',
  rows: [
    { id: 'rad', label: 'Radians', symbol: 'rad', toBaseFactor: 1, value: 0 },
    { id: 'deg', label: 'Degrees', symbol: '°', toBaseFactor: Math.PI / 180, value: 0 },
    { id: 'grad', label: 'Gradians', symbol: 'gons', toBaseFactor: Math.PI / 200, value: 0 },
    { id: 'arcmin', label: 'Arcminutes', symbol: "'", toBaseFactor: Math.PI / (180 * 60), value: 0 },
    { id: 'arcsec', label: 'Arcseconds', symbol: '"', toBaseFactor: Math.PI / (180 * 3600), value: 0 }
  ]
}
