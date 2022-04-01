import { getData, updateData } from "./generalCrud"

export function addOnglet(onglet) {
  if ([onglet].includes(null)) return alert(`Erreur d'ajout`)
  const data = getData()
  data.push(onglet)
  updateData(data)
}
