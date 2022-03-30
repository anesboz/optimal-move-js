import React, { Fragment, useEffect, useState } from "react"
import Row from "./Row"
import RowVelib from "./RowVelib"
import styled from "styled-components"
import Dots from "./Dots"
import { getVelibData } from "actions/dataAction"
import { isVelib, velibDataToOneStation } from "actions/ongletsTools"
import Plus from "components/Footer/Plus"
import { Link } from "react-router-dom"
import PageMenu from "components/MyMenu/PageMenu"
import { Grid } from "@mui/material"



export default function Table({
  onglets,
  i_onglet,
  i_page,
  refreshState,
  onDotClick,
}) {
  const page = onglets[i_onglet].pages[i_page]
  const [velibData, setVelibData] = useState(null)
  const [refresh, setRefresh] = refreshState

  function gettingVelib() {
    if (i_onglet == null) return null
    setVelibData(null)
    getVelibData()
      .then((res) => setVelibData(res))
  }

  useEffect(() => gettingVelib(), [])
  return (
    <Fragment>
      <Grid container >
        <Grid item xs={2}>
          <PageMenu
            i_onglet={i_onglet}
            i_page={i_page}
            afterAction={setRefresh}
          />
        </Grid>
        <Grid item>
          <h6 className="mt-2">{page.description}</h6>
        </Grid>
      </Grid>
      {/* <Fragment style={{ width: `100%` }}>
        <PageMenu
          i_onglet={i_onglet}
          i_page={i_page}
          afterAction={setRefresh}
        />
        <h6 className="mt-2">{page.description}</h6>
      </Fragment> */}
      <TableContainer className="col-10 mt-2 p-0">
        {page.lines.map((row, i) => (
          <Fragment key={i}>
            {row.mode === `velib` ? (
              <RowVelib
                data={velibDataToOneStation(velibData, row.line)}
                logoOnclick={gettingVelib}
                row={row}
                key={i}
                i_onglet={i_onglet}
                i_page={i_page}
                id={i}
                refreshState={refreshState}
              />
            ) : (
              <Row
                row={row}
                key={i}
                i_onglet={i_onglet}
                i_page={i_page}
                id={i}
                refreshState={refreshState}
              />
            )}
          </Fragment>
        ))}
        <Link to={`/addStation`} state={{ i_onglet, i_page }}>
          <Plus />
        </Link>
      </TableContainer>
      <Dots
        onglet={onglets[i_onglet]}
        i_onglet={i_onglet}
        i_page={i_page}
        onDotClick={onDotClick}
      />
    </Fragment>
  )
}

const TableContainer = styled.div`
  scroll-behavior: smooth;
  overflow-y: scroll;
  max-height: 40%;
  // border: 1px solid red;
`
