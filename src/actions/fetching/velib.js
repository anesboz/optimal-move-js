import axios from 'axios'
import { PROXY, velibURL } from 'variables/constants'
import velibEIcon from 'assets/icons/velibE.png'
import velibPIcon from 'assets/icons/velibP.png'
import velibMIcon from 'assets/icons/velibM.png'
import {
  ls_getIfRecent,
  ls_saveDatedData,
} from 'actions/localstorage/generalActions'

const VELIB_STATIONS_URL =
  PROXY +
  `https://velib-metropole-opendata.smoove.pro/opendata/Velib_Metropole/station_information.json`

const VELIB_INVENTAIRE_URL =
  PROXY +
  'https://velib-metropole-opendata.smoove.pro/opendata/Velib_Metropole/station_status.json'

export function velib_getData() {
  console.log(`🚩 . velib_getData`)
  return new Promise((resolve, reject) => {
    axios
      .get(VELIB_INVENTAIRE_URL)
      .then((res) => {
        if (!res) reject('cannot fetch velib api')
        resolve(res.data.data.stations)
      })
      .catch((err) => reject(err))
  })
}

export async function velib_getStationsNames(forceFetch = false) {
  const ret = ls_getIfRecent('velib_stations')
  if (ret != null && !forceFetch) return ret
  const res = await axios.get(VELIB_STATIONS_URL)
  console.log(`🚩 . res`, res)
  const stationsNames = res.data.data.stations.map(({ name, stationCode }) => ({
    name,
    stationCode,
  }))
  ls_saveDatedData('velib_stations', stationsNames)
  return stationsNames
}

export function velib_getStation(velibData, stationCode) {
  if (velibData == null) return null
  const velibStation = velibData.find((e) => e.stationCode == stationCode)
  if (velibStation == null) return null
  return [
    {
      message: (
        <div style={{ height: `100%` }} className="center-y">
          <img style={{ height: `70%` }} src={velibEIcon} />
          <span>
            &nbsp;
            {
              velibStation.num_bikes_available_types.find((e) =>
                Object.keys(e).includes('ebike')
              ).ebike
            }
          </span>
        </div>
      ),
    },
    {
      message: (
        <div style={{ height: `100%` }} className="center-y">
          <img style={{ height: `70%` }} src={velibPIcon} />
          <span> &nbsp;{velibStation.num_docks_available}</span>
        </div>
      ),
    },
    {
      message: (
        <div style={{ height: `100%` }} className="center-y">
          <img style={{ height: `70%` }} src={velibMIcon} />
          <span>
            &nbsp;
            {
              velibStation.num_bikes_available_types.find((e) =>
                Object.keys(e).includes('mechanical')
              ).mechanical
            }
          </span>
        </div>
      ),
    },
  ]
}
