import React from "react"
import styled from "styled-components"
import loading from "assets/icons/loading.gif"
import ebikeLogo from "assets/icons/velibE.png"
import docksLogo from "assets/icons/velibP.png"
import mechanicalLogo from "assets/icons/velibM.png"
import logo_velib from "assets/icons/logo_velib.png"
import sideRow from "assets/icons/sideRow.png"

export default function Row({ row, data, id, logoOnclick }) {
  const { depart } = row
  const { mechanical, ebike, docks } = data
  return (
    <RowContainer>
      <Case onClick={logoOnclick}>
        <VelibContainer>
          <VelibLogo>
            <Img src={logo_velib} />
          </VelibLogo>
          <VelibStationName>{depart}</VelibStationName>
        </VelibContainer>
      </Case>
      <Case>
        <Img src={ebikeLogo} className="mr-2" />
        {ebike ?? <Img src={loading} />}
      </Case>
      <Case>
        <Img src={docksLogo} className="mr-2" />
        {docks ?? <Img src={loading} />}
      </Case>
      <Case>
        <Img src={mechanicalLogo} className="mr-2" />
        {mechanical ?? <Img src={loading} />}
      </Case>

      <Case key={5} style={{ flex: "1 0 18%" }}>
        <Img src={sideRow} />
      </Case>
    </RowContainer>
  )
}

const RowContainer = styled.div`
  display: flex;
  height: 3.4rem;
  margin-bottom: 0.2rem;
  padding: 0;
  overflow: scroll;
`
const Case = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #dddddd;
  margin: 0 0.1rem;
  padding: 0 0.5rem;
  flex: 1 0 32.5%;
  white-space: nowrap;
  overflow: hidden;
`

const Img = styled.img`
  height: 68%;
`

const VelibContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const VelibLogo = styled.div`
  display: flex;
  flex: 1 0 70%;
  align-items: center;
  justify-content: center;
  max-height: 70%;
`
const VelibStationName = styled.div`
  flex: 1 0;
  display: flex;
  font-size: 53%;
  height: 20%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`
