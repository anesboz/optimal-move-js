import React, { Fragment } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import loading from "../media/icons/loading.gif"
import v1 from "../media/icons/velibE.png"
import v2 from "../media/icons/velibP.png"
import v3 from "../media/icons/velibM.png"
import logo_velib from "../media/icons/logo_velib.png"

const RowContainer = styled.div`
  display: flex;
  height: 3.4rem;
  margin-bottom: 0.2rem;
  padding: 0;
  overflow: scroll;
`

const velibImg = {
  0: v1,
  1: v2,
  2: v3,
}
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
  border: 1px solid gray;
  margin: 0 0.1rem;
  padding: 0 0.5rem;
  color: ${(props) =>
    isHere.concat(isComing).includes(props.value) ? "orange" : "inital"};
  flex: ${(props) =>
    problems.includes(props.value) ? "1 0 66%" : "1 0 32.5%"};
  white-space: nowrap;
  overflow: hidden;
`

const Img = styled.img`
  height: 68%;
`

const VelibContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const VelibLogo = styled.div`
  display: flex;
  flex: 1 0 70%;
  align-items: center;
  justify-content: center;
  max-height: 70%;
`
const VelibStationName = styled.div`
  flex: 1 0;
  display: flex;
  font-size: 53%;
  height: 20%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

function Row(props) {
  let i = props.id
  let page = props.page[i]
  return (
    <RowContainer>
      <Case>
        <VelibContainer>
          <VelibLogo>
            <Img src={logo_velib} />
          </VelibLogo>
          <VelibStationName>{page?.velibStationName}</VelibStationName>
        </VelibContainer>
      </Case>
      {[0, 1, 2].map((t, j) => (
        <Case value={t} key={j}>
          <Fragment>
            <Img src={velibImg[j]} className="mr-2" />
            {page?.times ? page.times[t] : <Img src={loading} />}
          </Fragment>
        </Case>
      ))}
    </RowContainer>
  )
}

const mapStateToProps = (state) => ({
  page: state.onglets.page,
})

export default connect(mapStateToProps)(Row)
