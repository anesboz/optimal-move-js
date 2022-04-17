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

export function onglet_left(iOnglet) {
  if (iOnglet === 0) return
  const data = getData()
  const elem = data[iOnglet]
  // delete in current position
  data.splice(iOnglet, 1)
  data.splice(iOnglet - 1, 0, elem)
  updateData(data)
  setOngletPage(iOnglet - 1, 0)
}

export function onglet_right(iOnglet) {
  const data = getData()
  const n = data.length
  if (iOnglet == n - 1) return
  const elem = data[iOnglet]
  // delete in current position
  data.splice(iOnglet, 1)
  data.splice(iOnglet + 1, 0, elem)
  updateData(data)
  setOngletPage(iOnglet + 1, 0)
}
