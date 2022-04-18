import { setOngletPage } from 'actions/mainActions'
import { getData, updateData } from './generalActions'

export function page_addEmptyPage(iOnglet, iPage) {
  const data = getData()
  data[iOnglet].pages.push({
    description: ``,
    lines: [],
  })
  updateData(data)
  setOngletPage(iOnglet, iPage)
}
// export function page_addEmptyPage(iOnglet, iPage) {
//   const data = getData()
//   data[iOnglet].pages[iPage].lines.push({
//     description: ``,
//     lines: [],
//   })
//   updateData(data)
//   setOngletPage(iOnglet, iPage)
// }

export function page_delete(iOnglet, iPage) {
  const data = getData()
  if (data[iOnglet].pages.length > 0) data[iOnglet].pages.splice(iPage, 1)
  else return
  updateData(data)
  if (iPage > 0) setOngletPage(iOnglet, iPage - 1)
}

export function page_left(iOnglet, iPage) {
  if (iPage == 0) return
  const data = getData()
  const elem = data[iOnglet].pages[iPage]
  // delete in current position
  data[iOnglet].pages.splice(iPage, 1)
  data[iOnglet].pages.splice(iPage - 1, 0, elem)
  updateData(data)
  setOngletPage(iOnglet, iPage - 1)
}

export function page_right(iOnglet, iPage) {
  const data = getData()
  const n = data[iOnglet].pages.length
  if (n === 0 || iPage == n - 1) return
  const elem = data[iOnglet].pages[iPage]
  // delete in current position
  data[iOnglet].pages.splice(iPage, 1)
  data[iOnglet].pages.splice(iPage + 1, 0, elem)
  updateData(data)
  setOngletPage(iOnglet, iPage + 1)
}

export function page_updateDescription(iOnglet, iPage, newDescription) {
  const data = getData()
  data[iOnglet].pages[iPage].description = newDescription
  updateData(data)
  setOngletPage(iOnglet, iPage)
}

export function page_addRow(iOnglet, iPage, station, position) {
  if ([station, iOnglet, iPage].some((e) => e == null))
    return alert(`page_addRow error type == null`, { station, iOnglet, iPage })
  const data = getData()
  if (position != null) {
    data[iOnglet].pages[iPage].lines.splice(position, 1, station)
  } else {
    data[iOnglet].pages[iPage].lines.push(station)
  }
  updateData(data)
}

export function addOnglet(onglet, position) {
  if (onglet === null) return alert(`addOnglet onglet === null`)
  const data = getData()
  if (position != null) {
    data.splice(position, 1, onglet)
    updateData(data)
  } else {
    data.push(onglet)
    updateData(data)
    page_addEmptyPage(data.length, 0)
  }
}
