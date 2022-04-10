import React from 'react'
import styled from 'styled-components'
import plusDot from 'assets/icons/plusDot.png'
import { setOngletPage } from 'actions/mainActions'
import { page_addEmptyPage } from 'actions/localstorage/pagesActions'

export default function Dots({ pages, iCurrentOnglet, iCurrentPage }) {
  return (
    <DotsContainer>
      {pages.map((_, i) => (
        <Dot
          key={i}
          selected={iCurrentPage === i}
          onClick={() => setOngletPage(iCurrentOnglet, i)}
        />
      ))}
      <Dot
        onClick={() => {
          page_addEmptyPage(iCurrentOnglet, pages.length)
        }}
      >
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
let d = '1.1rem'
const Dot = styled.div`
  display: flex;
  height: ${d};
  width: ${d};
  border-radius: 50%;
  background-color: black;
  opacity: ${(props) => (props.selected ? 0.7 : 0.4)};
  margin-right: 0.4rem;
`
