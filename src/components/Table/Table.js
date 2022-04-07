import React, { Fragment, useEffect, useState } from 'react'
import Row from './Row'
import RowVelib from './RowVelib'
import Dots from './Dots'
import { getVelibData } from 'actions/mainActions'
import { velibDataToOneStation } from 'actions/ongletsTools'
import PageMenu from 'components/MyMenu/PageMenu'
import { Grid } from '@mui/material'
import plusLogo from 'assets/icons/plus.png'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

export default function Table(props) {
  const { onglet, iCurrentOnglet, iCurrentPage } = props
  const page = onglet?.pages?.[iCurrentPage]
  const [velibData, setVelibData] = useState(null)

  useEffect(() => {
    getVelibData().then((res) => setVelibData(res))
  }, [])

  const navigate = useNavigate()
  if (!page)
    return (
      <Dots
        pages={onglet.pages}
        iCurrentOnglet={iCurrentOnglet}
        iCurrentPage={iCurrentPage}
      />
    )
  return (
    <Fragment>
      <Grid container>
        <Grid item xs={2}>
          <PageMenu iOnglet={iCurrentOnglet} iPage={iCurrentPage} />
        </Grid>
        <Grid item>
          <h6 className="mt-2">{page?.description}</h6>
        </Grid>
      </Grid>
      <div
        className="col-10 mt-2 p-0"
        style={{
          scrollBehavior: `smooth`,
          overflowY: `scroll`,
          maxHeight: `40%`,
        }}
      >
        {page?.lines.map((row, i) => (
          <Fragment key={i}>
            {row.mode === `velib` ? (
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
              <Row
                row={row}
                key={i}
                iOnglet={iCurrentOnglet}
                iPage={iCurrentPage}
                iRow={i}
              />
            )}
          </Fragment>
        ))}
        <PlusContainer onClick={() => navigate(`/pageAddRow`)}>
          <DotImg src={plusLogo} />
        </PlusContainer>
        {/* `/page_addRow` */}
      </div>
      <Dots
        pages={onglet.pages}
        iCurrentOnglet={iCurrentOnglet}
        iCurrentPage={iCurrentPage}
      />
    </Fragment>
  )
}

const PlusContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  /* height: 5rem; */
  /* border: 3px solid red; */
`

const DotImg = styled.img`
  height: 2rem;
  /* width: 1rem; */
  /* border: 3px solid red; */
  border-radius: 50%;
  /* background-color: black; */
  /* opacity: ${(props) => (props.selected ? 0.7 : 0.4)}; */
  margin-top: 0.4rem;
`
