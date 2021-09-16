import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { uploadOnglet } from "../actions/ongletAction"
import { getOnglet } from "../actions/dataAction"

const DotsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`
let d = "1.1rem"
const Dot = styled.div`
  display: flex;
  height: ${d};
  width: ${d};
  border-radius: 50%;
  background-color: black;
  opacity: ${(props) => (props.selected ? 0.7 : 0.4)};
  margin-right: 0.4rem;
`

function Dots(props) {
  const iOnglet = props.ongletsBranch.iOnglet
  const iPage = props.ongletsBranch.iPage
  if (iOnglet == null) {
    return null
  }
  let onglet = getOnglet(iOnglet)
  return (
    <DotsContainer>
      {onglet.list.map((e, i) => (
        <Dot
          key={i}
          selected={iPage === i}
          onClick={() => props.uploadOnglet(iOnglet, i)}
        />
      ))}
    </DotsContainer>
  )
}

const mapStateToProps = (state) => ({
  ongletsBranch: state.ongletsBranch
})

export default connect(mapStateToProps, { uploadOnglet })(Dots)
