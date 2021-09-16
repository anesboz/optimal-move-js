import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { getOnglet } from "../actions/dataAction"
import { uploadOnglet } from "../actions/ongletAction"

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
  const onglet = getOnglet(id)
  let selected = id === props.iOnglet
  return (
    <Div
      onClick={() => {
        let j = selected ? props.iPage : 0
        props.uploadOnglet(id, j)
      }}
      selected={selected}
    >
      <Img src={onglet.logo} alt={onglet.name} />
    </Div>
  )
}

const mapStateToProps = (state) => ({
  iOnglet: state.ongletsBranch.iOnglet,
  iPage: state.ongletsBranch.iPage,
})

export default connect(mapStateToProps, { uploadOnglet })(OneButton)
