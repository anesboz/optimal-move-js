import { refresh } from 'actions/mainActions'
import dateformat from 'dateformat'

/**
 * getting data from localstorage
 * @returns Object
 */
export function getData(iOnglet) {
  const data = JSON.parse(localStorage.getItem(`data`))
  if (!data) return []
  if (iOnglet != null) return data[iOnglet]
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

const ONE_MONTH_S = 30 * 3600 * 24
export function ls_getIfRecent(key, delai = ONE_MONTH_S) {
  let stored = JSON.parse(localStorage.getItem(key))
  if (stored == null) return null
  if (stored?.date == null) return null
  const diffDays = Math.ceil(
    Math.abs(new Date() - new Date(stored.date)) / 1000
  )
  if (diffDays > delai) return null
  return stored?.value
}

export function ls_saveDatedData(key, value) {
  const obj = {
    date: dateformat(new Date(), 'yyyy-mm-dd'),
    value: value,
  }
  localStorage.setItem(key, JSON.stringify(obj))
}
