import {
  ATTRIBUTE_ONGLET,
  RESET_ALL,
  UPLOAD_PAGE,
  GO_PAGE,
  RESET_PAGE,
} from "./types"
// import data from "../data"
import test from "./debug.js"

// export const uploadPage = (page) => {
export const uploadOnglet = (iOnglet, queries, iPage=0) => (dispatch) => {
  console.log("je charge les queries :", queries)
  dispatch({
    type: ATTRIBUTE_ONGLET,
    payload: { iOnglet, iPage },
  })
  queries.map((q, i) => {
    if (/^[0-9]+$/.test(q)) {
      return velib(q, i)(dispatch)
    }
    if (noctilienEtJour(q)) {
      return
    }
    fetch(q)
      .then((res) => res.json())
      .then((data) => {
        let times = data.result.schedules.map((e) => e.message)
        let destinations = data.result.schedules.map((e) => e.destination)
        dispatch({
          type: UPLOAD_PAGE,
          payload: {
            i,
            row: {
              arrivee: destinations,
              times,
            },
          },
        })
      })
  })
}

export function noctilienEtJour(q) {
  let t = new Date().toLocaleTimeString()
  return !(t > "00:00:00" && t < "07:00:00") && q.includes("noctiliens")
}

// function nightTime() {
//   var t = new Date().toLocaleTimeString()
//   return t > "00:15:00" && t < "06:30:00"
// }

// export const attributeOnglet = (i) => (dispatch) => {
//   resetAll()(dispatch)
//   uploadPageInOnglet(i, 0)(dispatch)
// }

export const resetAll = () => (dispatch) => {
  dispatch({
    type: RESET_ALL,
  })
}

const vel = {
  api: "https://velib-metropole-opendata.smoove.pro/opendata/Velib_Metropole/station_status.json",
  proxy: "https://anes-cors-everywhere.herokuapp.com/",
}

export const velib = (codeStation, i) => (dispatch) => {
  test(() => codeStation)
  fetch(vel.proxy + vel.api)
    .then((data) => data.json())
    .then((jsonFile) =>
      jsonFile.data.stations
        .filter((e) => e.stationCode === codeStation)
        .map((station) =>
          dispatch({
            type: UPLOAD_PAGE,
            payload: {
              i,
              row: {
                mechanical: station.num_bikes_available_types[0].mechanical,
                ebike: station.num_bikes_available_types[1].ebike,
                docks: station.numDocksAvailable,
              },
            },
          })
        )
    )
}

// export const goPageDansOnglet = (i, numOnglet) => (dispatch) => {
//   uploadPage(numOnglet, i)(dispatch)
//   dispatch({
//     type: GO_PAGE,
//     payload: i,
//   })
// }

export function goPageDansOnglet(params) {
  return
}
