/*each unit carries its own list of "conversion-rows", where
each row has:
a label ("Square Nanometers", show on the left)
a symbol ("nm^2", show on the right)
a factor to convert from that unit to some common base (e.g. m^2)
a value slot that you'll bind to your <input> */
export interface ConversionRow {
  id: string;//unique key e.g. nm2
  label: string;
  symbol:string;
  /*multiplier to convert from this unit to baseUnit*/
  toBaseFactor:number;
  value:number;
}

export interface UnitDetailTable {
  id:string;
  name:string;
  rows: ConversionRow[];
}
