import { setOngletPage } from "actions/mainActions"
import { getData, updateData } from "./generalCrud"

export function page_addEmptyPage(iOnglet) {
  const data = getData()
  data[iOnglet].pages.push({
    description: `New Page`,
    lines: [],
  })
  updateData(data)
}

export function page_delete(iOnglet, iPage) {
  const data = getData()
  if (data[iOnglet].pages.length > 1) data[iOnglet].pages.splice(iPage, 1)
  updateData(data)
}

export function page_addRow(iOnglet, iPage, station) {
  if ([station, iOnglet, iPage].some((e) => e == null))
    return alert(`Erreur d'ajout`)
  const data = getData()
  data[iOnglet].pages[iPage].lines.push(station)
  updateData(data)
}


export function page_modifyDescription(iOnglet, iPage) {
  alert(`page_modifyDescription a definir`)
  // const data = getData()
  // data[iOnglet].pages[iPage].lines.splice(id, 1)
  // updateData(data)
}

export function page_left(iOnglet, iPage) {
  if (iPage == 0) return
  const data = getData()
  const elem = data[iOnglet].pages[iPage]
  // delete in current position
  data[iOnglet].pages.splice(iPage, 1)
  data[iOnglet].pages.splice(iPage - 1, 0, elem)
  updateData(data)
  setOngletPage(iOnglet, iPage-1)
}

export function page_right(iOnglet, iPage) {
  const data = getData()
  const n = data[iOnglet].pages.length
  if (iPage == n - 1) return
  const elem = data[iOnglet].pages[iPage]
  // delete in current position
  data[iOnglet].pages.splice(iPage, 1)
  data[iOnglet].pages.splice(iPage + 1, 0, elem)
  updateData(data)
  setOngletPage(iOnglet, iPage + 1)
}
