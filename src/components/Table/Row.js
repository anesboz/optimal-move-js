import React, { Fragment, useEffect, useState } from "react"
import styled from "styled-components"
import loading from "assets/icons/loading.gif"
import { getStationSchedule } from "actions/mainActions"
import { isDayTime } from "actions/ongletsTools"
import { getLineImgURL } from "variables/data"
import { capitalizeFirstLetter } from "actions/tools"
import MyMenu from "components/MyMenu/RowMenu"
import { connect } from "react-redux"

function Row(props) {
  const { lastRefresh } = props.mainBranch
  const { iPage, iOnglet, row, iRow } = props
  const { mode, line, station, way, terminus } = row
  const [data, setData] = useState(null)
  useEffect(() => {
    setData(null)
    if (mode == `noctilien` && isDayTime()) return null
    getStationSchedule({
      mode,
      line,
      station,
      way,
      terminus,
    })
      .then((res) => {
        setData(res)
      })
      .catch((err) => console.log(`🚩 . err fetching row `, err))
  }, [lastRefresh])
  if (mode == `noctilien` && isDayTime()) return null
  return (
    <Fragment>
      <Description>
        {capitalizeFirstLetter(station.replaceAll(`+`, ` `))} ➙{' '}
        {data?.[0]?.destination}
      </Description>
      <RowContainer>
        <Case>
          <Img src={getLineImgURL(mode, line)} />
        </Case>
        {data ? (
          data?.map(({ message }, j) => (
            <Case value={message} key={j}>
              <div className={isHere.includes(message) ? 'blink' : ''}>
                {message}
              </div>
            </Case>
          ))
        ) : (
          <Fragment>
            <Case>
              <Img src={loading} />
            </Case>
            <Case>
              <Img src={loading} />
            </Case>
          </Fragment>
        )}
        {/* <Case
          key={5}
          style={{ flex: "1 0 18%" }}
          onClick={() => console.log(`🚩 . changeDirection`)}
        >
          <Img src={sideRow} />
        </Case> */}
        <MyMenu
          iOnglet={iOnglet}
          iPage={iPage}
          iRow={iRow}
        />
      </RowContainer>
    </Fragment>
  )
}

const RowContainer = styled.div`
  display: flex;
  height: 3.4rem;
  margin-bottom: 0.2rem;
  padding: 0;
  overflow: scroll;
`

const isHere = [
  "Train a l'approche",
  "A l'approche",
  "Train a quai",
  "A l'arret",
]
const isComing = ["0 mn", "1 mn", "2 mn"]

const problems = [
  "SERVICE TERMINE",
  "Schedules unavailable",
  "Service termine",
  "INFO INDISPO ....",
  "Train retarde",
  "SERVICE NON COMMENCE",
]

const Case = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #dddddd;
  margin: 0 0.1rem;
  padding: 0 0.5rem;
  color: ${(props) =>
    isHere.concat(isComing).includes(props.value) ? "orange" : "inital"};
  flex: ${(props) =>
    problems.includes(props.value) ? "1 0 66%" : "1 0 32.5%"};
  white-space: nowrap;
  overflow-x: hidden;
  overflow-y: visible;
`

const Img = styled.img`
  height: 68%;
`
const Description = styled.div`
  font-size: 50%;
  color: gray;
`
const mapStateToProps = (state) => ({
  mainBranch: state.mainBranch,
})

export default connect(mapStateToProps)(Row)