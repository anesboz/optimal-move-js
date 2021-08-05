import React, { Fragment } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import loading from "../media/icons/loading.gif"
import ebikeLogo from "../media/icons/velibE.png"
import docksLogo from "../media/icons/velibP.png"
import mechanicalLogo from "../media/icons/velibM.png"
import logo_velib from "../media/icons/logo_velib.png"
import sideRow from "../media/icons/sideRow.png"

const RowContainer = styled.div`
  display: flex;
  height: 3.4rem;
  margin-bottom: 0.2rem;
  padding: 0;
  overflow: scroll;
`

// const velibImg = {
//   ebike: v1,
//   1: v2,
//   2: v3,
// }

const Case = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
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

function Row(props) {
  let i = props.id
  // let page = props.page[i]
  let row = props.page[props.id]
  return (
    <RowContainer>
      <Case>
        <VelibContainer>
          <VelibLogo>
            <Img src={logo_velib} />
          </VelibLogo>
          <VelibStationName>{props.depart}</VelibStationName>
        </VelibContainer>
      </Case>
      <Case>
        <Img src={ebikeLogo} className="mr-2" />
        {row?.ebike ? row.ebike : <Img src={loading} />}
      </Case>
      <Case>
        <Img src={docksLogo} className="mr-2" />
        {row?.docks ? row.docks : <Img src={loading} />}
      </Case>
      <Case>
        <Img src={mechanicalLogo} className="mr-2" />
        {row?.mechanical ? row.mechanical : <Img src={loading} />}
      </Case>

      <Case key={5} style={{ flex: "1 0 18%" }}>
        <Img src={sideRow} />
      </Case>
    </RowContainer>
  )
}

const mapStateToProps = (state) => ({
  page: state.onglets.page,
})

export default connect(mapStateToProps)(Row)
