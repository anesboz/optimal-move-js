import { setOngletPage } from 'actions/mainActions'
import { getData, updateData } from './generalActions'
import { page_addEmptyPage } from './pagesActions'

export function addOnglet(onglet, position) {
  if (onglet === null) return alert(`addOnglet onglet === null`)
  const data = getData()
  if (position != null) {
    data.splice(position, 1, onglet)
    updateData(data)
  } else {
    data.push(onglet)
    updateData(data)
    page_addEmptyPage(data.length - 1, 0)
  }
}

export function onglet_delete(iOnglet) {
  const data = getData()
  if (data.length > 0) data.splice(iOnglet, 1)
  else return
  updateData(data)
  if (iOnglet > 0) setOngletPage(null, null)
}

export function onglet_isEmpty(iOnglet) {
  const pages = getData(iOnglet)?.pages
  return pages == null || pages?.length === 0
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
