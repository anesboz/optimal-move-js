import React, { Fragment, useEffect } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import loading from "../media/icons/loading.gif"
import sideRow from "../media/icons/sideRow.png"

import { changeDirection } from "../actions/dataAction"

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
  overflow-y: visible ;
`

const Img = styled.img`
  height: 68%;
`


function Row(props) {
  let row = props.page[props.id]
  return (
    <RowContainer>
      <Case>
        <Img src={props.row?.imgUrl} />
      </Case>
      {row ? (
        row.times?.map((time, j) => (
          <Case value={time} key={j}>
            <div className={isHere.includes(time) ? "blink" : ""}>{time}</div>
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
      <Case
        key={5}
        style={{ flex: "1 0 18%" }}
        onClick={() =>
          props.changeDirection(props.iOnglet, props.iPage, props.id)
        }
      >
        <Img src={sideRow} />
      </Case>
    </RowContainer>
  )
}

const mapStateToProps = (state) => ({
  iOnglet: state.ongletsBranch.iOnglet,
  iPage: state.ongletsBranch.iPage,
  page: state.ongletsBranch.page,
})

export default connect(mapStateToProps, { changeDirection })(Row)
