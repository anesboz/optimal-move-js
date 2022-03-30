import React from "react"
import styled from "styled-components"
import plusDot from "assets/icons/plusDot.png"
import { page_addPage } from "actions/crudAction"

export default function Dots({ onglet, i_onglet, i_page, onDotClick }) {
  let pages = onglet.pages
  return (
    <DotsContainer>
      {pages.map((_, i) => (
        <Dot
          key={i}
          selected={i_page === i}
          onClick={() => onDotClick(i)}
        />
      ))}
      <Dot onClick={() => {
        page_addPage({ i_onglet, i_page })
        onDotClick(onglet.pages.length)
      }}>
        <img src={plusDot} />
      </Dot>
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
