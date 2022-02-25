import React from "react"
import styled from "styled-components"

export default function Dots({ onglet, i_selectedPage, onPagesChange }) {
  let pages = onglet.list
  return (
    <DotsContainer>
      {pages.map((_, i) => (
        <Dot
          key={i}
          selected={i_selectedPage === i}
          onClick={() => onPagesChange(i)}
        />
      ))}
    </DotsContainer>
  )
}

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
