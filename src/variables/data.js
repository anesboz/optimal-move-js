import { apiURL, assetsURL } from './constants'
import velibLogo from 'assets/icons/velibLogo.png'
export const properType = (assetsORapi, mode) => {
  const types = {
    assets: {
      metro: `metro`,
      bus: `busratp`,
      tram: `tram`,
      rer: `rer`,
      noctilien: `noctilien`,
      velib: `velib`,
    },
    api: {
      metro: `metros`,
      bus: `buses`,
      tram: `tramways`,
      rer: `rers`,
      noctilien: `noctiliens`,
      velib: `velib`,
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
  if (mode === `velib`) return { logoURL: velibLogo }
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

export function getScheduleURL(mode, line, station, way) {
  var normalized_station = station
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
  normalized_station = encodeURI(station)
  return omApi(mode).scheduleURL_prefix + `${line}/${normalized_station}/${way}`
}

export function getLineImgURL(mode, line) {
  if (mode === 'velib') return velibLogo
  const url = omAssets(mode).lineImgURL_prefix + `${line}.svg`
  return url
}
