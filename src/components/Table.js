import React from "react"
import Row from "./Row"
import RowVelib from "./RowVelib"
import styled from "styled-components"
import { connect } from "react-redux"
import data from "../data"

const TableContainer = styled.div`
  scroll-behavior: smooth;
  overflow-y: scroll;
  /* border: 4px solid red; */
  max-height: 30%;
`

function Table(props) {
  let currentOnglet = props.currentOnglet
  let currentPage = props.currentPage
  if (currentOnglet == null) {
    return null
  }
  let list = data[currentOnglet].list[currentPage]
  // if (props?.page != {}) {
  //   list = props.page
  // }

  console.log(props.page)
  return (
    <TableContainer className="col-10 mt-5 p-0">
      {list.map((q, i) =>
        q.includes("velib") ? (
          <RowVelib id={i} key={i} />
        ) : !nightTime() && /^n.*/.test(q) ? null : (
          <Row q={q} id={i} key={i} />
        )
      )}
    </TableContainer>
  )
}
const mapStateToProps = (state) => ({
  currentOnglet: state.onglets.currentOnglet,
  currentPage: state.onglets.currentPage,
  page: state.onglets.page,
})

function nightTime() {
  var t = new Date().toLocaleTimeString()
  return t > "00:15:00" && t < "06:30:00"
}

export default connect(mapStateToProps)(Table)
