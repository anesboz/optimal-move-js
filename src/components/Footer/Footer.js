import OneButton from "./OneButton"
import styled from "styled-components"

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
export default function Footer({ onglets, i_selectedOnglet, onButtonClick }) {
  return (
    <OngletsContainer>
      {onglets.map(({ name, logo }, i) => (
        <OneButton
          key={i}
          id={i}
          logo={logo}
          name={name}
          onButtonClick={onButtonClick}
          i_selectedOnglet={i_selectedOnglet}
        />
      ))}
    </OngletsContainer>
  )
}
