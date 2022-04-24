import React, { Fragment, useEffect, useState } from 'react'
import { isDayTime } from 'actions/ongletsTools'
import { getLineImgURL } from 'variables/data'
import { capitalizeFirstLetter } from 'actions/tools'
import RowMenu from 'components/Rows/RowMenu'
import { connect } from 'react-redux'
import Case from './Case'
import * as ratp from 'actions/fetching/ratp'
import { velib_getStation } from 'actions/fetching/velib'
import { refreshVelib } from 'actions/mainActions'
import { initialData, offlineData } from 'variables/constants'

function Row(props) {
  const { lastRefresh } = props.mainBranch
  const { iPage, iOnglet, row, iRow, velibData } = props
  const { mode, line, station } = row
  const [data, setData] = useState(initialData)

  const isVelib = mode === 'velib'

  useEffect(() => {
    if (mode == `noctilien` && isDayTime()) return
    setData(initialData)
    if (isVelib)
      return setData(velib_getStation(velibData, line) ?? initialData)
    ratp
      .getSchedule(row)
      .then((res) => {
        if (res.length > 0) setData(res)
        else setData(offlineData)
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
          velib={isVelib}
          content={
            <img
              style={{ height: `70%` }}
              src={getLineImgURL(mode, line)}
              onClick={() => isVelib && refreshVelib()}
            />
          }
        />
        {data?.map(({ message }, j) => (
          <Case content={message} key={j} velib={isVelib} />
        ))}
        <Case
          content={
            <RowMenu
              iOnglet={iOnglet}
              iPage={iPage}
              iRow={iRow}
              velib={isVelib}
              velibData={isVelib ? velibData : null}
            />
          }
          velib={isVelib}
        />
      </div>
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  mainBranch: state.mainBranch,
})

export default connect(mapStateToProps)(Row)
