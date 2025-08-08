export interface Unit {
  id: string,
  name:string,/** Display name (“Angle”, “Base”, etc.) */
  icon:string,
  route?:string,
  isFavorite?:boolean // true if added to favorites, default is false
}
