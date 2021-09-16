import {
  ATTRIBUTE_ONGLET,
  RESET_ALL,
  UPLOAD_PAGE,
} from "./types"
import { getOnglet } from "./dataAction"

export const uploadOnglet = (iOnglet, iPage) => (dispatch) => {
  const queries = getOnglet(iOnglet).list[iPage].map((e) => e.query)
  // console.log("queries")
  // console.log(queries)
  const laps = new Date().getTime()
  dispatch({
    type: ATTRIBUTE_ONGLET,
    payload: { iOnglet, iPage, laps},
  })
  var velibArray = []
  queries.map((q, i) => {
    // Si noctilien Et Jour
    if (noctilienEtJour(q)) {
      return
    }
    // Si velib
    if (/^[0-9]+$/.test(q)) {
      return velibArray.push([i, q])
    }

    fetch(q)
      .then((res) => res.json())
      .then((data) => {
        let times = data.result.schedules.map((e) => e.message)
        let destinations = data.result.schedules.map((e) => e.destination)
        return dispatch({
          type: UPLOAD_PAGE,
          payload: {
            laps,
            i,
            row: {
              arrivee: destinations,
              times,
            },
          },
        })
      })
  })
  velib(velibArray, laps)(dispatch)
}

export function noctilienEtJour(q) {
  let t = new Date().toLocaleTimeString()
  return !(t > "00:00:00" && t < "07:00:00") && q.includes("noctiliens")
}

export const resetAll = () => (dispatch) => {
  dispatch({
    type: RESET_ALL,
  })
}

const vel = {
  api: "https://velib-metropole-opendata.smoove.pro/opendata/Velib_Metropole/station_status.json",
  proxy: "https://anes-cors-everywhere.herokuapp.com/",
}

export const velib = (velibArray, laps) => (dispatch) => {
  // console.log(velibArray)
  fetch(vel.proxy + vel.api)
    .then((data) => data.json())
    .then((jsonFile) => {
      velibArray.map((couple) => {
        const i = couple[0]
        const codeStation = couple[1]
        // console.log("i, codeStation", i, codeStation)
        jsonFile.data.stations
          .filter((e) => e.stationCode === codeStation)
          .map((station) =>
            dispatch({
              type: UPLOAD_PAGE,
              payload: {
                laps,
                i,
                row: {
                  mechanical: station.num_bikes_available_types[0].mechanical,
                  ebike: station.num_bikes_available_types[1].ebike,
                  docks: station.numDocksAvailable,
                },
              },
            })
          )
      })
    })
}

export function goPageDansOnglet(params) {
  return
}
