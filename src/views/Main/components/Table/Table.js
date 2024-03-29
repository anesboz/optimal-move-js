import React, { useEffect, useState } from 'react'
import Row from '../Rows/Row'
import Dots from './Dots'
import PageMenu from 'views/Main/components/Table/PageMenu'
import { TextField } from '@mui/material'
import plusLogo from 'assets/icons/plus.png'
import { useNavigate } from 'react-router-dom'
import { page_updateDescription } from 'actions/localstorage/pagesActions'
import { velib_getData } from 'actions/fetching/velib'
import { useSwipeable } from 'react-swipeable'
import { setOngletPage } from 'actions/mainActions'

export default function Table(props) {
  const { onglet, iOnglet, iPage, lastRefreshVelib } = props
  const page = onglet?.pages?.[iPage]
  const [velibData, setVelibData] = useState(null)
  const navigate = useNavigate()
  const [desc, setDesc] = useState('')
  useEffect(() => {
    setVelibData(null)
    velib_getData().then((res) => setVelibData(res))
  }, [lastRefreshVelib])

  useEffect(() => {
    setDesc(page?.description ?? '')
  }, [page])

  const handlers = useSwipeable({
    onSwiped: (eventData) => {
      const isRow = eventData.event.path.map((e) => e.className).includes('row')
      if(isRow) return
      const { deltaX } = eventData
      const delta = 60
      if (deltaX >= +delta) {
        console.log('left')
        setOngletPage(iOnglet, iPage - 1)
      } else if (deltaX < -delta) {
        console.log('right')
        setOngletPage(iOnglet, iPage + 1)
      }
    },
  })

  if (iOnglet == null || onglet == null || onglet.length == 0)
    return null
  return (
    <div style={{ height: `100%` }} {...handlers} className="table">
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
          onBlur={(event) =>
            page_updateDescription(iOnglet, iPage, desc)
          }
          sx={{ input: { color: '#4f504e5e' } }}
          placeholder="..."
        />
        <div style={{ position: 'absolute', right: 5, zIndex: 10 }}>
          <PageMenu iOnglet={iOnglet} iPage={iPage} />
        </div>
      </div>
      <div style={{ height: `90%` }}>
        <div style={{ height: `80%`, margin: `0 10%`, overflowY: `scroll` }}>
          {page?.lines.map((row, i) => (
            <Row
              row={row}
              key={i}
              iOnglet={iOnglet}
              iPage={iPage}
              iRow={i}
              velibData={velibData}
            />
          ))}
          <div style={{ height: `3.5rem`, margin: 20 }} className="center">
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
            iOnglet={iOnglet}
            iPage={iPage}
          />
        </div>
      </div>
    </div>
  )
}
