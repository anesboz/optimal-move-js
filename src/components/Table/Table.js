import React, { Fragment, useEffect, useState } from "react"
import Row from "./Row"
import RowVelib from "./RowVelib"
import styled from "styled-components"
import Dots from "./Dots"
import { getVelibData } from "actions/dataAction"
import { isVelib, velibDataToOneStation } from "actions/utils"



export default function Table({
  onglets,
  i_selectedOnglet,
  i_selectedPage,
  refresh,
  onPagesChange,
}) {
  const list = onglets[i_selectedOnglet].list[i_selectedPage]
  const [velibData, setVelibData] = useState(null)

  function gettingVelib() {
    if (i_selectedOnglet == null) return null
    setVelibData(null)
    console.log(`🚩 getting VelibData ..`)
    getVelibData()
      .then((res) => setVelibData(res))
      .catch((err) => console.log(`🚩 . err`, err))
  }

  useEffect(() => gettingVelib(), [])
  return (
    <Fragment>
      <h6 className="mt-2">
        {onglets[i_selectedOnglet].description?.[i_selectedPage]}
      </h6>
      <TableContainer className="col-10 mt-2 p-0">
        {list.map((row, i) => (
          <Fragment key={i}>
            {isVelib(row) ? (
              <RowVelib
                data={velibDataToOneStation(velibData, row.query)}
                row={row}
                id={i}
                key={i}
                logoOnclick={gettingVelib}
              />
            ) : (
              <Row row={row} id={i} key={i} refresh={refresh} />
            )}
          </Fragment>
        ))}
      </TableContainer>
      <Dots
        onglet={onglets[i_selectedOnglet]}
        i_selectedPage={i_selectedPage}
        onPagesChange={onPagesChange}
      />
    </Fragment>
  )
}

const TableContainer = styled.div`
  scroll-behavior: smooth;
  overflow-y: scroll;
  max-height: 30%;
`
