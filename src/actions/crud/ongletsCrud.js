import { getData, updateData } from "./generalCrud"

export function addOnglet(onglet) {
  if (onglet === null) return alert(`Erreur d'ajout`)
  const data = getData()
  data.push(onglet)
  updateData(data)
}
