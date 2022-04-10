import React, { useEffect, useState } from 'react'
import loadingIcon from 'assets/icons/loading.gif'
import { isDayTime } from 'actions/ongletsTools'
import { getLineImgURL } from 'variables/data'
import { capitalizeFirstLetter, insistWhenErrors } from 'actions/tools'
import RowMenu from 'components/Rows/RowMenu'
import { connect } from 'react-redux'
import Case from './Case'
import WifiOffIcon from '@mui/icons-material/WifiOff'
import * as ratp from 'actions/fetching/ratp'

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
  const { iPage, iOnglet, row, iRow } = props
  const { mode, line, station, way, terminus } = row
  const [data, setData] = useState(initialData)
  console.log(`🚩 .  iRow data`,iRow, data)

  useEffect(() => {
    if (mode == `noctilien` && isDayTime()) return null
    setData(initialData)
    insistWhenErrors(() =>
      ratp.getSchedule({
        mode,
        line,
        station,
        way,
        terminus,
      })
    )
      .then((res) => setData(res))
      .catch((err) => setData(offlineData))
  }, [lastRefresh])

  return (
    <div style={{ height: ` 100%` }}>
      <div style={{ fontSize: `55%`, color: `gray`, margin: `5px 0` }}>
        {capitalizeFirstLetter(station.replaceAll(`+`, ` `))} ➙{' '}
        {data?.[0]?.destination}
      </div>
      <div
        style={{
          display: `block`,
          height: `100%`,
          width: `100%`,
          overflowX: `scroll`,
          whiteSpace: `nowrap`,
        }}
      >
        <Case
          content={
            <img style={{ height: `70%` }} src={getLineImgURL(mode, line)} />
          }
        />
        {data?.map(({ message }, j) => (
          <Case content={message} key={j} />
        ))}
        <Case
          content={<RowMenu iOnglet={iOnglet} iPage={iPage} iRow={iRow} />}
        />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  mainBranch: state.mainBranch,
})

export default connect(mapStateToProps)(Row)
