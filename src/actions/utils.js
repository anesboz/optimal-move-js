import dateformat from "dateformat"

export function noctilienEtJour(q) {
  let t = new Date().toLocaleTimeString()
  return !(t > "00:00:00" && t < "07:00:00") && q.includes("noctiliens")
}

export function isVelib(row) {
  return /^[0-9]+$/.test(row.query)
}

export function velibDataToOneStation(velibData, stationCode) {
  if (!velibData) return { mechanical: null, ebike: null, docks: null }
  const station = velibData.filter((e) => e.stationCode === stationCode)[0]
  const data = {
    mechanical: station.num_bikes_available_types[0].mechanical,
    ebike: station.num_bikes_available_types[1].ebike,
    docks: station.numDocksAvailable,
  }
  return data
}

function getOngletIndexByName( name) {
  const data = JSON.parse(localStorage.getItem("data"))
  for (const [i, onglet] of data.entries()) {
    if (onglet.name === name) return i
  }
}

export function toggleDefaultIndexes() {
  const newState = localStorage.getItem("DEFAULT_INDEXES") === `true` ? `false` : `true`
  localStorage.setItem("DEFAULT_INDEXES", newState)
  return newState
}


export function defaultIndexesByTime() {
  const hhmm = dateformat(new Date(), `HH:MM`)
  var i_default_onglet = getOngletIndexByName(`Paris`)
  var i_default_page = 0

  // je vais au boulot le matin
  if (`08:25` < hhmm < `09:15`) {
    i_default_onglet = getOngletIndexByName(`CA`)
    i_default_page = 0
  }

  // je rentre chez moi depuis montrouge
  if (`17:00` < hhmm < `18:15`) {
    i_default_onglet = getOngletIndexByName(`CA`)
    i_default_page = 1
  }

  if (`18:15` < hhmm < `21:00`) {
    i_default_onglet = getOngletIndexByName(`PorteItalie`)
  }

  return { i_default_onglet, i_default_page }
}
