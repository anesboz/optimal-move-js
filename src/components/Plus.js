import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import data from "../data"
import { goPageDansOnglet } from "../actions/ongletAction"
import plusLogo from "../media/icons/plus.png"

const PlusContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  /* height: 5rem; */
  /* border: 3px solid red; */
`

const DotImg = styled.img`
  height: 2rem;
  /* width: 1rem; */
  /* border: 3px solid red; */
  border-radius: 50%;
  /* background-color: black; */
  /* opacity: ${(props) => (props.selected ? 0.7 : 0.4)}; */
  margin-top: 0.4rem;
`

function Plus(props) {
  return (
    <PlusContainer>
      <DotImg src={plusLogo} />
    </PlusContainer>
  )
}

const mapStateToProps = (state) => ({
  iOnglet: state.ongletsBranch.iOnglet,
  iPage: state.ongletsBranch.iPage,
})

export default connect(mapStateToProps, { goPageDansOnglet })(Plus)
