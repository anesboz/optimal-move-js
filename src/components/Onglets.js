// import data from "../data";
import { connect } from "react-redux"
import OneButton from "./OneButton"
import styled from "styled-components"
import { getOnglets } from "../actions/dataAction"

const OngletsContainer = styled.div`
  position: absolute;
  bottom: 0;
  height: 10%;
  width: 100%;
  border-top: 1px solid #dddddd;

  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
`
export default function Onglets() {
  const onglets = getOnglets()
  return (
    <OngletsContainer>
      {onglets.map((_, i) => (
        <OneButton key={i} id={i} />
      ))}
    </OngletsContainer>
  )
}
