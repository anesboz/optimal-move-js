import { insistWhenErrors } from 'actions/tools'
import axios from 'axios'
import { proxy } from 'variables/constants'
import { getScheduleURL, omApi, properType } from 'variables/data'

export const getSchedule = async ({ mode, line, station, way, terminus }) => {
  const query = getScheduleURL(mode, line, station, way)
  console.log(`🚩 . query`, query)
  const res = await insistWhenErrors(() => axios.get(query))
  if (res?.status != 200) throw 'status != 200'
  let tmp = res.data.result.schedules
  tmp = tmp.filter((e) => {
    console.log(`🚩 . terminus`, terminus)
    console.log(`🚩 . e.destination`, e.destination)
    console.log(`🚩 . e.destination === terminus`, e.destination === terminus)
    return e.destination === terminus
  })
  // case metro 7 for example
  // if (terminus) tmp = tmp.filter((e) => e.destination === terminus)
  console.log(`🚩 . tmp`, tmp)
  return tmp
}

export async function getWays(mode, line) {
  console.log(`🚩 . getWays`)
  const query = omApi(mode).destinationsURL + line
  const res = await insistWhenErrors(() => axios.get(query))
  const destinations = res.data.result.destinations
  // traiter le cas deux branch :
  const rv = []
  destinations.forEach((dest) => {
    if (dest.name.includes('/')) {
      const branch1 = dest.name.split('/')[0].trim()
      const branch2 = dest.name.split('/')[1].trim()
      rv.push({ name: branch1, way: dest.way })
      rv.push({ name: branch2, way: dest.way })
    } else {
      rv.push(dest)
    }
  })
  return rv
}

export async function getLines(mode) {
  console.log(`🚩 . getLines`)
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
