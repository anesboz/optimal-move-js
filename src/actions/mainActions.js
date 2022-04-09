import axios from 'axios'
import store from 'store'
import { velibURL } from 'variables/constants'
import { getScheduleURL } from 'variables/data'
import { REFRESH, SET_ONGLET_PAGE } from './types'

export const getStationSchedule = ({ mode, line, station, way, terminus }) => {
  const query = getScheduleURL(mode, line, station, way)
  return new Promise((resolve, reject) => {
    axios
      .get(query)
      .catch((err) => {
        console.log(`🚩 .axios catch((err) `)
        return reject(err)
      })
      .then((res) => {
        console.log(`🚩 .axios then((res)`)
        if (res?.status != 200) {
          console.log(`axios if (res?.status != 200)`)
          return reject('cannot fetch ratp api')
        }
        console.log(`axios tmp`)
        let tmp = res.data.result.schedules
        // case metro 7 for example
        if (terminus) tmp = tmp.filter((e) => e.destination === terminus)
        return resolve(tmp)
      })
  })
}

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

export const setOngletPage = (iOnglet = 0, iPage = 0) => {
  store.dispatch({
    type: SET_ONGLET_PAGE,
    payload: { iOnglet, iPage },
  })
}

export const refresh = () => store.dispatch({ type: REFRESH })
