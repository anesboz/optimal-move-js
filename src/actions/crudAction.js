import initialData from "data/initialData"

export function changeDirection(i_onglet, i_page) {}

export function createStation({ station, i_onglet, i_page }) {
  // const { mode, line, station, direction, destination } = station
  const data = localStorage.getItem(`data`)
  data[i_onglet].pages[i_page].lines.push(station)
  localStorage.setItem(`data`, data)
}

export function getData() {
  if (!localStorage.getItem(`data`)) {
    localStorage.setItem(`data`, JSON.stringify(initialData))
  }
  return JSON.parse(localStorage.getItem(`data`))
}

export function updateData(newData) {
  localStorage.setItem(`data`, JSON.stringify(newData))
}

export function addStation({ station, i_onglet, i_page }) {
  if ([station, i_onglet, i_page].some((e) => e == null))
    return alert(`Erreur d'ajout`)
  const data = getData()
  data[i_onglet].pages[i_page].lines.push(station)
  updateData(data)
}

export function row_reverseDirection({ i_onglet, i_page, id }) {
  const data = getData()
  const currentRow = data[i_onglet].pages[i_page].lines[id]
  currentRow.way = currentRow.way === `R` ? `A` : `R`
  currentRow.terminus = null
  data[i_onglet].pages[i_page].lines[id] = currentRow
  updateData(data)
}

export function row_delete({ i_onglet, i_page, id }) {
  const data = getData()
  data[i_onglet].pages[i_page].lines.splice(id, 1)
  updateData(data)
}

export function row_up({ i_onglet, i_page, id }) {
  if (id == 0) return
  const data = getData()
  const elem = data[i_onglet].pages[i_page].lines[id]
  // delete in current position
  data[i_onglet].pages[i_page].lines.splice(id, 1)
  data[i_onglet].pages[i_page].lines.splice(id - 1, 0, elem)
  updateData(data)
}

export function row_down({ i_onglet, i_page, id }) {
  const data = getData()
  const n = data[i_onglet].pages[i_page].lines.length
  if (id == n - 1) return
  const elem = data[i_onglet].pages[i_page].lines[id]
  // delete in current position
  data[i_onglet].pages[i_page].lines.splice(id, 1)
  data[i_onglet].pages[i_page].lines.splice(id + 1, 0, elem)
  updateData(data)
}

export function page_addPage({ i_onglet, i_page, id }) {
  const data = getData()
  data[i_onglet].pages.push({
    description: `New Page`,
    lines: [],
  })
  updateData(data)
}

export function page_delete({ i_onglet, i_page, id }) {
  const data = getData()
  if (data[i_onglet].pages.length > 1) data[i_onglet].pages.splice(i_page, 1)
  updateData(data)
}

export function page_modifyDescription({ i_onglet, i_page, id }) {
  const data = getData()
  data[i_onglet].pages[i_page].lines.splice(id, 1)
  updateData(data)
}

export function page_left({ i_onglet, i_page }) {
  if (i_page == 0) return
  const data = getData()
  const elem = data[i_onglet].pages[i_page]
  // delete in current position
  data[i_onglet].pages.splice(i_page, 1)
  data[i_onglet].pages.splice(i_page - 1, 0, elem)
  updateData(data)
}

export function page_right({ i_onglet, i_page }) {
  const data = getData()
  const n = data[i_onglet].pages.length
  if (i_page == n - 1) return
  const elem = data[i_onglet].pages[i_page]
  // delete in current position
  data[i_onglet].pages.splice(i_page, 1)
  data[i_onglet].pages.splice(i_page + 1, 0, elem)
  updateData(data)
}
