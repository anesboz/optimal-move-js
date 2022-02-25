import React from "react"
import styled from "styled-components"

export default function OneButton({
  name,
  logo,
  id,
  onButtonClick,
  i_selectedOnglet,
}) {
  return (
    <Div
      onClick={() => {
        onButtonClick(id)
      }}
      style={{ opacity: id === i_selectedOnglet ? 1 : 0.5 }}
    >
      <Img src={logo} alt={name} />
    </Div>
  )
}

const Div = styled.div`
  display: flex;
  flex: 0 0 25%;
  justify-content: center;
  align-items: center;
  background-color: #00aa91;
`

const Img = styled.img`
  height: 65%;
  border-radius: 50%;
`