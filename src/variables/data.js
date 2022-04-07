import { apiURL, assetsURL } from "./constants"

// (assetsORapi: `api | assets`, mode: `metro | bus | tram | noctilien | rer`  )
export const properType = (assetsORapi, mode) => {
  const types = {
    assets: {
      metro: `metro`,
      bus: `busratp`,
      tram: `tram`,
      rer: `rer`,
      noctilien: `noctilien`,
    },
    api: {
      metro: `metros`,
      bus: `buses`,
      tram: `tramways`,
      rer: `rers`,
      noctilien: `noctiliens`,
    },
  }
  return types[assetsORapi][mode]
}

export const omApi = (mode) => {
  const obj = {
    linesURL: apiURL + `lines/${properType(`api`, mode)}/`,
    stationsURL: apiURL + `stations/${properType(`api`, mode)}/`,
    destinationsURL: apiURL + `destinations/${properType(`api`, mode)}/`,
    scheduleURL_prefix: apiURL + `schedules/${properType(`api`, mode)}/`,
  }
  return obj
}

export const omAssets = (mode) => {
  const t = mode === `tram` ? `t` :``
  const obj = {
    logoURL: assetsURL + `${properType(`assets`, mode)}/symbole.1634824971.svg`,
    lineImgURL_prefix:
      assetsURL +
      `${properType(`assets`, mode)}/picto_${properType(
        `assets`,
        mode
      )}_ligne-`+t,
  }
  return obj
}

export function getScheduleURL(mode, line, station, direction = `R`) {
  var normalized_station = station.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  normalized_station = encodeURI(station)
  return (
    omApi(mode).scheduleURL_prefix +
    `${line}/${normalized_station}/${direction}`
  )
}

export function getLineImgURL(mode, line) {
  const url = omAssets(mode).lineImgURL_prefix + `${line}.svg`
  // console.log(`🚩 . url`, url)
  return url
}
