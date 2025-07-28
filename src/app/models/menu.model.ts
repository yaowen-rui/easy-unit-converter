import {Unit} from './unit.model'

export interface Menu {
  /** “All Units” or "Favorite" */
  title: string,

  /** the list of units under this menu */
  units:Unit[],
}
