import loadingIcon from 'assets/icons/loading.gif'
import BusAlertIcon from '@mui/icons-material/BusAlert'
import BugReportIcon from '@mui/icons-material/BugReport'
export const DEFAULT_INDEXES_STATE = 1
export const PROXY = 'https://anes-cors-everywhere.herokuapp.com/'

export const apiURL = `https://api-ratp.pierre-grimaud.fr/v4/`
export const assetsURL = `https://www.ratp.fr/sites/default/files/lines-assets/picto/`


export const initialData = [...new Array(2)].map((e, i) => ({
  message: <img style={{ height: `70%` }} src={loadingIcon} key={i} />,
}))

export const emptyData = [...new Array(2)].map((e, i) => ({
  message: (
    <div style={{ color: '#00000059' }} key={i}>
      <BusAlertIcon />
      <span style={{ fontSize: '60%' }}>&nbsp;no data</span>
    </div>
  ),
}))

export const problemData = [...new Array(2)].map((e, i) => ({
  message: (
    <div style={{ color: '#f25c5a91' }} key={i}>
      <BugReportIcon />
      <span style={{ fontSize: '60%' }}>&nbsp;bug 505</span>
    </div>
  ),
}))
