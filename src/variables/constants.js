import { createTheme } from '@mui/material'


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
