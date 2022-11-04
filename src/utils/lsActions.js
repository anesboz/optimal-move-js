export function lsSave(obj = { test: 1 }) {
  const key = Object.keys(obj)[0]
  const value = Object.values(obj)[0]
  if (key == null) return
  localStorage.setItem(key, JSON.stringify({ data: value, date: new Date() }))
}

export function lsLoad(key) {
  return JSON.parse(localStorage.getItem(key))?.data
}

export function lsRemoveItem(key) {
  localStorage.removeItem(key)
}

export function lsLoadDate(key) {
  return JSON.parse(localStorage.getItem(key))?.date
}

export function lsLoadFull(key) {
  return JSON.parse(localStorage.getItem(key))
}
