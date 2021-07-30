import React from "react"
import Row from "./Row"
import styled from "styled-components"
import { connect } from "react-redux"
import data from "../data"

const TableContainer = styled.div`
  scroll-behavior: smooth;
  overflow-y: scroll;
`;

function Table(props) {
  let currentOnglet = props.currentOnglet
  let currentPage = props.currentPage
  if (currentOnglet == null) {
    return null;
  }
  let page = data[currentOnglet].list[currentPage];
  return (
  <TableContainer className="col-8 m-auto h-50 mt-5 p-3 center-h">
    {page.map((_, i) => <Row id={i} key={i} />)}
  </TableContainer>)
}
const mapStateToProps = (state) => ({
  currentOnglet: state.onglets.currentOnglet,
  currentPage: state.onglets.currentPage,
  page: state.onglets.page,
});

export default connect(mapStateToProps)(Table);
