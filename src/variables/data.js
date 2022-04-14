import { apiURL, assetsURL } from './constants'

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
  let t = ``
  if (mode === `tram`) t = 't'
  if (mode === `noctilien`) t = 'n'
  const obj = {
    logoURL: assetsURL + `${properType(`assets`, mode)}/symbole.1634824971.svg`,
    lineImgURL_prefix:
      assetsURL +
      `${properType(`assets`, mode)}/picto_${properType(
        `assets`,
        mode
      )}_ligne-` +
      t,
  }
  return obj
}

export function getScheduleURL(mode, line, station) {
  var normalized_station = station
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
  normalized_station = encodeURI(station)
  return omApi(mode).scheduleURL_prefix + `${line}/${normalized_station}/A%2BR`
}

export function getLineImgURL(mode, line) {
  const url = omAssets(mode).lineImgURL_prefix + `${line}.svg`
  return url
}
