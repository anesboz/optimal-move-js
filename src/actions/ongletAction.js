import {
  ATTRIBUTE_ONGLET,
  RESET_ALL,
  UPLOAD_PAGE,
  GO_PAGE,
  RESET_PAGE,
} from "./types"
import data from "../data"

const transportTypes = {
  m: "metros",
  b: "buses",
  r: "rers",
  t: "tramways",
  n: "noctiliens",
}



export const attributeOnglet = (i) => (dispatch) => {
  resetAll()(dispatch)
  dispatch({
    type: ATTRIBUTE_ONGLET,
    payload: i,
  })
  uploadPage(i, 0)(dispatch)
}

export const resetAll = () => (dispatch) => {
  dispatch({
    type: RESET_ALL,
  })
}

// export const uploadPage = (page) => {
export const uploadPage = (currentOnglet, currentPage) => (dispatch) => {
  dispatch({
    type: RESET_PAGE,
  })
  let page = data[currentOnglet].list[currentPage]
  // example q = "m7 Villejuif Leo Lagrange"
  page.map((q, i) => {
    if (q.includes("velib")) {
      return velib(q, i)(dispatch)
    }
    let s = q.split(/\s(.+)/)
    let type = transportTypes[s[0][0]]
    let code = s[0].slice(1)
    let station = s[1].replace(/ /g, "%20")
    let way = "A"
    let query = `https://api-ratp.pierre-grimaud.fr/v4/schedules/${type}/${code}/${station}/${way}`
    // dont display noctiliens during the day
    if (!nightTime() && type === "noctiliens") {
      return
    }
    fetch(query)
      .then((res) => res.json())
      .then((data) => {
        let times = data.result.schedules.map((e) => e.message)
        dispatch({
          type: UPLOAD_PAGE,
          payload: {
            row: i,
            data: {
              times,
            },
          },
        })
      })
  })
}

function nightTime() {
  var t = new Date().toLocaleTimeString()
  return t > "00:15:00" && t < "06:30:00"
}


const vel = {
  api: "https://velib-metropole-opendata.smoove.pro/opendata/Velib_Metropole/station_status.json",
  proxy: "https://anes-cors-everywhere.herokuapp.com/",
}

export const velib = (q,i) => (dispatch) => {
  console.log("dans la fonction velib");
  let s = q.split(/(velib [0-9]+ )/)
  let codeStation = s[1].replace('velib', '').trim()
  let nameStation = s[2].trim()
  fetch(vel.proxy + vel.api)
    .then((data) => data.json())
    .then((jsonFile) =>
      jsonFile.data.stations
        .filter((e) => e.stationCode === codeStation)
        .map((station) =>
          dispatch({
            type: UPLOAD_PAGE,
            payload: {
              row: i,
              data: {
                velibStationName: nameStation,
                times: [
                  station.num_bikes_available_types[0].mechanical,
                  station.num_bikes_available_types[1].ebike,
                  station.numDocksAvailable,
                ],
              },
            },
          })
        )
    )
}

export const goPageDansOnglet = (i, numOnglet) => (dispatch) => {
  uploadPage(numOnglet, i)(dispatch)
  dispatch({
    type: GO_PAGE,
    payload: i,
  })
}


