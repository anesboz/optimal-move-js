// import data from "../data";
import { connect } from "react-redux"
import OneButton from "./OneButton"
import styled from "styled-components"
import { readOnglets } from "../actions/ongletsAction"
import { useEffect } from "react"
import {debug, flag} from '../debug'
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
const Onglets = (props) => {
  // CRUD READ onglets names and logo
  useEffect(() => props.readOnglets(), [])

  const allOnglets = props.allOnglets
  return (
    <OngletsContainer>
      {allOnglets?.map((onglet, i) => (
        <OneButton key={i} id={i} onglet={onglet} />
      ))}
    </OngletsContainer>
  )
}

const mapStateToProps = (state) => ({
  allOnglets: state.data.allOnglets,
})

export default connect(mapStateToProps, { readOnglets })(Onglets)

// export default Onglets
