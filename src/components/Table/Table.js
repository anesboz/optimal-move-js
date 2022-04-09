import React, { Fragment, useEffect, useState } from 'react'
import Row from '../Rows/Row'
import RowVelib from '../Rows/RowVelib'
import Dots from './Dots'
import { getVelibData } from 'actions/mainActions'
import { velibDataToOneStation } from 'actions/ongletsTools'
import PageMenu from 'components/Table/PageMenu'
import { Grid } from '@mui/material'
import plusLogo from 'assets/icons/plus.png'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

export default function Table(props) {
  const { onglet, iCurrentOnglet, iCurrentPage } = props
  const page = onglet?.pages?.[iCurrentPage]
  const [velibData, setVelibData] = useState(null)
  const navigate = useNavigate()
  // useEffect(() => {
  //   getVelibData().then((res) => setVelibData(res))
  // }, [])

  if (iCurrentOnglet == null) return null
  if (!page) {
    return (
      <Dots
        pages={onglet.pages}
        iCurrentOnglet={iCurrentOnglet}
        iCurrentPage={iCurrentPage}
      />
    )
  }
  const heightRow = `3.5rem`
  return (
    <div style={{ height: `100%` }}>
      <div className="center" style={{ height: `10%`, padding: 5 }}>
        <div>{page?.description}</div>
        <div style={{ position: 'absolute', right: 5, zIndex: 10 }}>
          <PageMenu iOnglet={iCurrentOnglet} iPage={iCurrentPage} />
        </div>
      </div>
      <div style={{ height: `90%`,  }}>
        <div style={{ height: `80%`, margin: `0 10%`, overflowY: `scroll` }}>
          {page?.lines.map((row, i) => (
            <div key={i} style={{ height: heightRow, margin: `0.6rem 0` }}>
              <Row
                row={row}
                key={i}
                iOnglet={iCurrentOnglet}
                iPage={iCurrentPage}
                iRow={i}
              />
            </div>
          ))}
          <div
            style={{ height: heightRow, margin: 20 }}
            className="center"
            onClick={() => navigate(`/pageAddRow`)}
          >
            <img style={{ height: ` 70%` }} src={plusLogo} />
          </div>
        </div>
        <div style={{ height: `20%` }}>
          <Dots
            pages={onglet.pages}
            iCurrentOnglet={iCurrentOnglet}
            iCurrentPage={iCurrentPage}
          />
        </div>
      </div>
    </div>
  )
}

/* {row.mode === `velib` ? (
                <RowVelib
                  data={velibDataToOneStation(velibData, row.line)}
                  logoOnclick={() =>
                    getVelibData().then((res) => setVelibData(res))
                  }
                  row={row}
                  key={i}
                  iCurrentOnglet={iCurrentOnglet}
                  iCurrentPage={iCurrentPage}
                  id={i}
                />
              ) : (
                
              )} */
