import OneButton from "./OneButton"
import styled from "styled-components"
import plusIcon from "assets/icons/plus.png"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function Footer({ onglets, i_selectedOnglet, onButtonClick }) {
  const n = onglets.length
  const navigate = useNavigate()
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
      {/* plus button */}
      <OneButton
        key={n}
        id={n}
        logo={plusIcon}
        name={`plusOnglet`}
        onButtonClick={() => navigate("/addOnglet")}
        i_selectedOnglet={i_selectedOnglet}
      />
    </OngletsContainer>
  )
}

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
