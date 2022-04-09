import React, { Fragment, useEffect, useState } from 'react'
import styled from 'styled-components'
import loadingIcon from 'assets/icons/loading.gif'
import { getStationSchedule } from 'actions/mainActions'
import { isDayTime } from 'actions/ongletsTools'
import { getLineImgURL } from 'variables/data'
import { capitalizeFirstLetter } from 'actions/tools'
import RowMenu from 'components/Rows/RowMenu'
import { connect } from 'react-redux'
import Case from './Case'
import WifiOffIcon from '@mui/icons-material/WifiOff'

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
  console.log(`🚩 . data`, data)

  const thread = () => {
    return new Promise((resolve, reject) => {
      if (mode == `noctilien` && isDayTime()) return null
      getStationSchedule({ mode, line, station, way, terminus })
        .then((res) => {
          resolve(res)
          console.log(`🚩 thread then((res)`, res)
        })
        .catch((err) => {
          console.log(`🚩 thread .catch((err)`, err)
          setTimeout(() => thread(), 800)
        })
    })
  }
  useEffect(() => {
    setData(initialData)
    thread()
      .then((res) => {
        setData(res)
        console.log(`🚩 useEffect(() .then((res)`, res)
      })
      .catch((err) => {
        setData(offlineData)
        console.log(`🚩 useEffect(() .catch((err)`, err)
      })
  }, [lastRefresh])

  return (
    <div style={{ height: ` 100%` }}>
      <div style={{ fontSize: `55%`, color: `gray`, margin: `5 0` }}>
        {capitalizeFirstLetter(station.replaceAll(`+`, ` `))} ➙{' '}
        {data?.[0]?.destination}
      </div>
      <div
        style={{
          display: `block`,
          height: `100%`,
          width: `100%`,
          // border: `2px solid green`,
          overflowX: `scroll`,
          // overflowY: `hidden`,
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
