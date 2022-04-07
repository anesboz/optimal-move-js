import { refresh } from "actions/mainActions"

/** 
 * getting data from localstorage
 * @returns Object
 */
export function getData(iCurrentOnglet)  {
  const data =  JSON.parse(localStorage.getItem(`data`)) 
  if(!data) return []
  if(iCurrentOnglet != null) return data[iCurrentOnglet]
  return data
}

export function updateData(newData) {
  localStorage.setItem(`data`, JSON.stringify(newData))
  refresh()
}

export function deleteData() {
  localStorage.clear()
  refresh()
}
