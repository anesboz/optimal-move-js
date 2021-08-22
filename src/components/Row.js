import React, { Fragment, useEffect } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import loading from "../media/icons/loading.gif"
import sideRow from "../media/icons/sideRow.png"

import { changeDirection } from "../actions/ongletsAction"

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
  let page = props.page[props.id]
  // let s = props.q.split(/\s(.+)/)
  // let imgUrl = ratpImgs[s[0][0]] + s[0].slice(1) + ".svg"
  let imgUrl = props.imgUrl //ratpImgs[s[0][0]] + s[0].slice(1) + ".svg"
  // const list = props.page
  let row = props.page[props.id]
  // return null
  return (
    <RowContainer>
      <Case>
        <Img src={props.row.imgUrl} />
      </Case>
      {row ? (
        row.times.map((time, j) => (
          // if (!time) {
          //   return (
          //
          //   )
          // }
          <Case value={time} key={j}>
            <div className={isHere.includes(time) ? "blink" : ""}>{time}</div>
          </Case>
          // if (!page.times?.[i]) {
          //   return null
          // }
          // return (

          // )
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
          props.changeDirection(props.currentOnglet, props.currentPage, props.id)
        }
      >
        <Img src={sideRow} />
      </Case>
      {/* <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <div
          class="dropdown-menu"
          aria-labelledby="dropdownMenuButton"
          style={{ zIndex: 55 }}
        >
          <a class="dropdown-item" href="#">
            Action
          </a>
          <a class="dropdown-item" href="#">
            Another action
          </a>
          <a class="dropdown-item" href="#">
            Something else here
          </a>
        </div>
      </div> */}
    </RowContainer>
  )
}

const mapStateToProps = (state) => ({
  currentOnglet: state.onglets.currentOnglet,
  currentPage: state.onglets.currentPage,
  page: state.onglets.page,
})

export default connect(mapStateToProps, { changeDirection })(Row)
