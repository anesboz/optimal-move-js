import { getData, updateData } from "./generalActions"

export function addOnglet(onglet) {
  if (onglet === null) return alert(`addOnglet onglet === null`)
  const data = getData()
  data.push(onglet)
  updateData(data)
}
