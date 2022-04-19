import React, { Fragment, useEffect, useState } from 'react'
import loadingIcon from 'assets/icons/loading.gif'
import { isDayTime } from 'actions/ongletsTools'
import { getLineImgURL } from 'variables/data'
import { capitalizeFirstLetter, insistWhenErrors } from 'actions/tools'
import RowMenu from 'components/Rows/RowMenu'
import { connect } from 'react-redux'
import Case from './Case'
import WifiOffIcon from '@mui/icons-material/WifiOff'
import * as ratp from 'actions/fetching/ratp'

import velibEIcon from 'assets/icons/velibE.png'
import velibPIcon from 'assets/icons/velibP.png'
import velibMIcon from 'assets/icons/velibM.png'

const initialData = [
  { message: <img style={{ height: `70%` }} src={loadingIcon} /> },
  { message: <img style={{ height: `70%` }} src={loadingIcon} /> },
]
const offlineData = [
  { message: <WifiOffIcon style={{ height: `70%` }} /> },
  { message: <WifiOffIcon style={{ height: `70%` }} /> },
]

function Row(props) {
  const { lastRefresh } = props.mainBranch
  const { iPage, iOnglet, row, iRow, velibData } = props
  const { mode, line, station, terminus } = row
  const [data, setData] = useState(initialData)

  function velib_getStation(velibData, stationCode) {
    if (velibData == null) return initialData
    const velibStation = velibData.find((e) => e.stationCode == stationCode)
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
  useEffect(() => {
    if (mode == `noctilien` && isDayTime()) return
    setData(initialData)
    if (mode == `velib`) return setData(velib_getStation(velibData, line))
    ratp
      .getSchedule({
        mode,
        line,
        station,
        terminus,
      })
      .then((res) => {
        if (res.length > 0) setData(res)
      })
      .catch((err) => setData(offlineData))
  }, [lastRefresh, velibData])

  return (
    <Fragment>
      <div
        style={{
          fontSize: `55%`,
          color: `gray`,
          marginBottom: `5px`,
          height: `20%`,
        }}
      >
        {capitalizeFirstLetter(station.replaceAll(`+`, ` `))}
        {mode != `velib` ? (
          // <Fragment>&nbsp;➙&nbsp;{data?.[0]?.destination}</Fragment>
          <Fragment>
            &nbsp;➙&nbsp;
            {[...new Set(data?.map((e) => e.destination))].join(' / ')}
          </Fragment>
        ) : null}
      </div>
      <div
        style={{
          display: `block`,
          height: `80%`,
          overflowX: `scroll`,
          whiteSpace: `nowrap`,
        }}
      >
        <Case
          velib={mode === 'velib'}
          content={
            <img style={{ height: `70%` }} src={getLineImgURL(mode, line)} />
          }
        />
        {data?.map(({ message }, j) => (
          <Case content={message} key={j} velib={mode === 'velib'} />
        ))}
        <Case
          content={
            <RowMenu
              iOnglet={iOnglet}
              iPage={iPage}
              iRow={iRow}
              velib={mode === 'velib'}
            />
          }
          velib={mode === 'velib'}
        />
      </div>
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  mainBranch: state.mainBranch,
})

export default connect(mapStateToProps)(Row)
