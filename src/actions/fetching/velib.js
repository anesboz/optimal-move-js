import axios from "axios"
import { velibURL } from "variables/constants"

export function getVelibData() {
  return new Promise((resolve, reject) => {
    axios
      .get(velibURL)
      .then((res) => {
        if (!res) reject('cannot fetch velib api')
        resolve(res.data.data.stations)
      })
      .catch((err) => reject(err))
  })
}
