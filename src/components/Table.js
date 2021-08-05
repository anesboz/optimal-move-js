import React, { Fragment } from "react"
import Row from "./Row"
import RowVelib from "./RowVelib"
import styled from "styled-components"
import { connect } from "react-redux"

import Plus from "./Plus"
import test from "../actions/debug"

const TableContainer = styled.div`
  scroll-behavior: smooth;
  overflow-y: scroll;
  /* border: 4px solid red; */
  max-height: 30%;
`

const Description = styled.div`
  /* display: flex; */
  /* justify-content: center; */
  /* height: 6%; */
  /* border: 1px solid red; */
  font-size: 50%;
`

function Table(props) {
  let currentOnglet = props.currentOnglet
  let currentPage = props.currentPage
  // n'affiche rien si aucune button n'est selectionne
  if (currentOnglet == null) {
    return null
  }
  const list = props.data[currentOnglet].list[currentPage]
  test(() => list)
  if (list.length == 0) {
    return null
  }
  return (
    <TableContainer className="col-10 mt-5 p-0">
      {list.map(
        (row, i) => (
          <Fragment key={i}>
            {/^[0-9]+$/.test(row.query) ? (
              <RowVelib depart={row.depart} id={i} key={i} />
            ) : (
              <Fragment>
                <Description>
                  {row.depart} ➙ {props.page?.[i]?.arrivee?.[0]}
                </Description>
                <Row row={row} id={i} key={i} />
              </Fragment>
            )}
          </Fragment>
        )

        // row.includes("velib") ? (
        //   ) : noctilienEtJour(q) ? null : (
        //   )
      )}
      {/* <Plus /> */}
    </TableContainer>
  )
}

const mapStateToProps = (state) => ({
  currentOnglet: state.onglets.currentOnglet,
  currentPage: state.onglets.currentPage,
  page: state.onglets.page,
})

export default connect(mapStateToProps)(Table)
