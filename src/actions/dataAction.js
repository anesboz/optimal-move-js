import axios from "axios"
import { velibURL } from "variables/constants"
import { getScheduleURL } from "variables/data"

export const getStationSchedule = ({ mode, line, station, way, terminus }) => {
  const query = getScheduleURL(mode, line, station, way)
  return new Promise((resolve, reject) => {
    axios
      .get(query)
      .catch((err) => {
        reject(err)
      })
      .then((res) => {
        if (!res) return reject(`cannot fetch ratp api`)
        var tmp = res.data.result.schedules
        // case metro 7 for example
        if (terminus) tmp = tmp.filter((e) => e.destination === terminus)
        resolve(tmp)
      })
  })
}

export const getVelibData = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(velibURL)
      .then((res) => {
        if (!res) reject(`cannot fetch velib api`)
        resolve(res.data.data.stations)
      })
      .catch((err) => reject(err))
  })
}

