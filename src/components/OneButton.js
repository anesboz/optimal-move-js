import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { uploadOnglet } from "../actions/ongletAction"
import test from "./debug.js";
const Div = styled.div`
  display: flex;
  flex: 0 0 25%;
  justify-content: center;
  align-items: center;
  background-color: #00aa91;
  opacity: ${(props) => `${props.selected ? 1 : 0.5}`};
`

const Img = styled.img`
  height: 65%;
  border-radius: 50%;
`
function OneButton(props) {
  const id = props.id
  const onglet = props.onglet
  let selected = id === props.currentOnglet
  return (
    <Div
      onClick={() => {
        test(() => onglet);
        let j = selected ? props.currentPage : 0
        props.uploadOnglet(id, onglet.list[j].map(e => e.query))
      }}
      selected={selected}
    >
      <Img src={onglet.logo} alt={onglet.name} />
    </Div>
  )
}

const mapStateToProps = (state) => ({
  currentOnglet: state.onglets.currentOnglet,
  currentPage: state.onglets.currentPage,
})

export default connect(mapStateToProps, { uploadOnglet })(OneButton)
