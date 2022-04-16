import { setOngletPage } from 'actions/mainActions'
import { getData, updateData } from './generalActions'

export function addOnglet(onglet) {
  if (onglet === null) return alert(`addOnglet onglet === null`)
  const data = getData()
  data.push(onglet)
  updateData(data)
}

export function onglet_delete(iOnglet) {
  const data = getData()
  if (data.length > 0) data.splice(iOnglet, 1)
  else return
  updateData(data)
  if (iOnglet > 0) setOngletPage(null, null)
}
