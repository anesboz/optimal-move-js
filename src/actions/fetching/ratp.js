import { insistWhenErrors } from 'actions/tools'
import axios from 'axios'
import { proxy } from 'variables/constants'
import { getScheduleURL, omApi, properType } from 'variables/data'

export const getSchedule = async (StationObject) => {
  const { mode, line, station, terminus } = StationObject
  const query = getScheduleURL(mode, line, station)
  const res = await insistWhenErrors(() => axios.get(query))
  if (res?.status != 200) throw 'status != 200'
  let tmp = res.data.result.schedules
  if (terminus != null) tmp = tmp.filter((e) => e.destination === terminus)
  return tmp
}

export async function getTerminus(mode, line, station) {
  if (station == null) {
    const stations = await getStations(mode, line)
    station = stations[0].slug
  }

  let scheduleA = await getSchedule({ mode, line, station })
  const res = [...new Set(scheduleA.map((e) => e.destination))]
  return res
}

export async function getLines(mode) {
  const query = proxy + omApi(mode).linesURL
  const res = await insistWhenErrors(() => axios.get(query))
  let tmp = res.data.result[properType('api', mode)]
  tmp = tmp.map((e) => e.code)
  const lines = [...new Set(tmp)] // uniq
  return lines
}

export async function getStations(mode, line) {
  const query = omApi(mode).stationsURL + line
  const res = await insistWhenErrors(() => axios.get(query))
  const tmp = res.data.result.stations
  const uniq = [...new Set(tmp)]
  return uniq
}
