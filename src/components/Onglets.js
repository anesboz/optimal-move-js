// import data from "../data";
import { connect } from "react-redux"
import OneButton from "./OneButton"
import styled from "styled-components"
import * as ls from "../actions/dataActions"

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
  // console.log(typeof(props.data))
  return (
    <OngletsContainer>
      {props.allOnglets.map((_, i) => (
        <OneButton key={i} id={i} onglet={props.allOnglets[i]} />
      ))}
    </OngletsContainer>
  )
}

const mapStateToProps = (state) => ({
  allOnglets: state.data.allOnglets,
})

export default connect(mapStateToProps)(Onglets)

// export default Onglets
