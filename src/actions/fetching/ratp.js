import {
  ls_getIfRecent,
  ls_saveDatedData,
} from 'actions/localstorage/generalActions'
import { insistWhenErrors } from 'actions/tools'
import axios from 'axios'
import { proxy } from 'variables/constants'
import { getScheduleURL, omApi, properType } from 'variables/data'

export const getSchedule = async (StationObject) => {
  const { mode, line, station, terminus } = StationObject
  const way = StationObject.way ?? 'A%2BR'
  const query = getScheduleURL(mode, line, station, way)
  console.log(`🚩 . query`, query)
  const res = await insistWhenErrors(() => axios.get(query))
  if (res?.status != 200) throw 'status != 200'
  let tmp = res.data.result.schedules
  if (terminus != null) tmp = tmp.filter((e) => e.destination === terminus)
  return tmp
}

export async function getLines(mode, forceFetch = false) {
  if (mode == null) return []
  const ret = ls_getIfRecent('lines_' + mode)
  if (ret != null && !forceFetch) return ret
  console.log(`🚩 . fetch from API`)
  const query = proxy + omApi(mode).linesURL
  const res = await insistWhenErrors(() => axios.get(query))
  let tmp = res.data.result[properType('api', mode)]
  tmp = tmp.map((e) => e.code)
  const lines = [...new Set(tmp)] // uniq
  ls_saveDatedData('lines_' + mode, lines)
  return lines
}

export async function getStations(mode, line, forceFetch = false) {
  if (mode == null || line == null) return []
  const ret = ls_getIfRecent('stations_' + mode + '_' + line)
  if (ret != null && !forceFetch) return ret

  const query = omApi(mode).stationsURL + line
  const res = await insistWhenErrors(() => axios.get(query))
  const tmp = res.data.result.stations
  console.log(`🚩 . tmp`, tmp)
  const stations = [...new Set(tmp)]
  ls_saveDatedData('stations_' + mode + '_' + line, stations)
  return stations
}

export async function getWays(mode, line, forceFetch = false) {
  if (mode == null || line == null) return []
  const ret = ls_getIfRecent('ways_' + mode + '_' + line)
  if (ret != null && !forceFetch) return ret

  const stations = await getStations(mode, line)
  const first = stations[0].slug
  const middle = stations[Math.floor(stations.length / 2)].slug
  const last = stations[stations.length - 1].slug

  let r = []
  let a = []

  for (let station of [first, middle, last]) {
    let schedule = await getSchedule({ mode, line, station, way: 'A' })
    schedule.map((e) => a.push(e.destination))
  }
  for (let station of [first, middle, last]) {
    let schedule = await getSchedule({ mode, line, station, way: 'R' })
    schedule.map((e) => r.push(e.destination))
  }

  a = [...new Set(a)]
  r = [...new Set(r)]
  const ways = [
    {
      way: 'A',
      terminus: a,
    },
    {
      way: 'R',
      terminus: r,
    },
  ]
  ls_saveDatedData('ways_' + mode + '_' + line, ways)
  return ways
}
