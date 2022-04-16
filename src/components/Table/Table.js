import React, { useState } from 'react'
import Row from '../Rows/Row'
import Dots from './Dots'
import PageMenu from 'components/Table/PageMenu'
import { TextField } from '@mui/material'
import plusLogo from 'assets/icons/plus.png'
import { useNavigate } from 'react-router-dom'
import { page_updateDescription } from 'actions/localstorage/pagesActions'

export default function Table(props) {
  const { onglet, iCurrentOnglet, iCurrentPage } = props
  const page = onglet?.pages?.[iCurrentPage]
  const [velibData, setVelibData] = useState(null)
  const navigate = useNavigate()
  const [desc, setDesc] = useState(page?.description)
  // useEffect(() => {
  //   getVelibData().then((res) => setVelibData(res))
  // }, [])

  const heightRow = `3.5rem`

  if (iCurrentOnglet == null || onglet == null || onglet.length == 0)
    return null
  return (
    <div style={{ height: `100%` }}>
      <div className="center" style={{ height: `10%`, padding: 5 }}>
        <TextField
          variant="standard"
          InputProps={{
            disableUnderline: true,
            inputProps: {
              style: { textAlign: 'center' },
            },
          }}
          value={desc}
          onChange={(event) => setDesc(event.target.value)}
          onBlur={() =>
            page_updateDescription(iCurrentOnglet, iCurrentPage, desc)
          }
          sx={{ input: { color: '#4f504e5e' } }}
          placeholder='...'
        />
        <div style={{ position: 'absolute', right: 5, zIndex: 10 }}>
          <PageMenu iOnglet={iCurrentOnglet} iPage={iCurrentPage} />
        </div>
      </div>
      <div style={{ height: `90%` }}>
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
          <div style={{ height: heightRow, margin: 20 }} className="center">
            {page != null ? (
              <img
                style={{ height: ` 70%` }}
                src={plusLogo}
                onClick={() => navigate(`/pageAddRow`)}
              />
            ) : null}
          </div>
        </div>
        <div style={{ height: `20%` }}>
          <Dots
            pages={onglet?.pages}
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
