import { UnitDetailTable } from "../models/unit-detail.model";

export const AREA_UNIT: UnitDetailTable = {
  id: 'area',
  name: 'Area',
  rows: [
    { id: 'nm2', label: 'Square Nanometers', symbol: 'nm²', toBaseFactor: 1e-18, value: 0 },
    { id: 'μm2', label: 'Square Micrometers', symbol: 'μm²', toBaseFactor: 1e-12, value: 0 },
    { id: 'mm2', label: 'Square Millimeters', symbol: 'mm²', toBaseFactor: 1e-6, value: 0 },
    { id: 'cm2', label: 'Square Centimeters', symbol: 'cm²', toBaseFactor: 1e-4, value: 0 },
    { id: 'm2', label: 'Square Meters', symbol: 'm²', toBaseFactor: 1, value: 0 },
    { id: 'km2', label: 'Square Kilometers', symbol: 'km²', toBaseFactor: 1e6, value: 0 },
    { id: 'ac', label: 'Acres', symbol: 'ac', toBaseFactor: 4046.856, value: 0 },
    { id: 'ha', label: 'Hectares', symbol: 'ha', toBaseFactor: 10000, value: 0 },
    { id: 'in2', label: 'Square Inches', symbol: 'in²', toBaseFactor: 0.00064516, value: 0 },
    { id: 'ft2', label: 'Square Feer', symbol: 'ft²', toBaseFactor: 0.09290304, value: 0 },
    { id: 'yd2', label: 'Square Yards', symbol: 'yd²', toBaseFactor: 0.83612736, value: 0 },
    { id: 'mi2', label: 'Square Miles', symbol: 'mi²', toBaseFactor: 2589988.110336, value: 0 },

  ]
}
