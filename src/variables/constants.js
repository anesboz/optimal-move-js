import { createTheme } from '@mui/material'
import loadingIcon from 'assets/icons/loading.gif'
import WifiOffIcon from '@mui/icons-material/WifiOff'

export const DEFAULT_INDEXES_STATE = 1
export const proxy = 'https://anes-cors-everywhere.herokuapp.com/'
export const velibURL =
  proxy +
  'https://velib-metropole-opendata.smoove.pro/opendata/Velib_Metropole/station_status.json'

export const apiURL = `https://api-ratp.pierre-grimaud.fr/v4/`
export const assetsURL = `https://www.ratp.fr/sites/default/files/lines-assets/picto/`

export const myTheme = createTheme({
  breakpoints: {
    values: {
      mob: 0,
      tab: 500,
      lap: 1024,
      desk: 1200,
    },
  },
})

export const initialData = [
  { message: <img style={{ height: `70%` }} src={loadingIcon} /> },
  { message: <img style={{ height: `70%` }} src={loadingIcon} /> },
]
export const offlineData = [
  { message: <WifiOffIcon style={{ height: `70%` }} /> },
  { message: <WifiOffIcon style={{ height: `70%` }} /> },
]
