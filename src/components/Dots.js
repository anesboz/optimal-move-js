import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import data from "../data"
import { uploadOnglet } from "../actions/ongletAction"

const DotsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  /* height: 5rem; */
  /* border: 3px solid red; */
`
let d = "1.1rem"
const Dot = styled.div`
  display: flex;
  height: ${d};
  width: ${d};
  /* border: 3px solid red; */
  border-radius: 50%;
  background-color: black;
  opacity: ${(props) => (props.selected ? 0.7 : 0.4)};
  margin-right: 0.4rem;
`

function Dots(props) {
  if (props.currentOnglet == null) {
    return null
  }
  let onglet = props.allOnglets[props.currentOnglet]
  let allPages = onglet.list
  return (
    <DotsContainer>
      {allPages.map((e, i) => (
        <Dot
          key={i}
          selected={props.currentPage === i}
          onClick={() =>
            props.uploadOnglet(props.currentOnglet, onglet.list[i].map(e => e.query), i)
          }
        />
      ))}
    </DotsContainer>
  )
}

const mapStateToProps = (state) => ({
  currentOnglet: state.onglets.currentOnglet,
  currentPage: state.onglets.currentPage,
  allOnglets: state.data.allOnglets,
})

export default connect(mapStateToProps, { uploadOnglet })(Dots)
