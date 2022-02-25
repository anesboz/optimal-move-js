import axios from "axios"
import { velibLinks } from "variables/constants"

export const getRatpStation = (query) => {
  return new Promise((resolve, reject) => {
    axios
      .get(query)
      .catch((err) => {
        reject(err)
      })
      .then((res) => {
        resolve(res.data.result.schedules)
      })
  })
}

export const getVelibData = () => {
  const url = velibLinks.proxy + velibLinks.api
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .catch((err) => reject(err))
      .then((res) => {
        resolve(res.data.data.stations)
      })
  })
}
