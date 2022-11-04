import React from 'react'
import BusAlertIcon from '@mui/icons-material/BusAlert'
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard'
import HotelIcon from '@mui/icons-material/Hotel'
import { emptyData } from 'variables/constants'
import { Grid } from '@mui/material'

const isHere = [
  "Train a l'approche",
  "A l'approche",
  'Train a quai',
  "A l'arret",
]
const isComing = ['0 mn', '1 mn', '2 mn']

const problems = [
  'SERVICE TERMINE',
  'Service termine',
  'Schedules unavailable',
  'INFO INDISPO ....',
  'Train retarde',
  'SERVICE NON COMMENCE',
]

export default function Case(porps) {
  const { content, velib } = porps
  let elem = content
  try {
    if (
      /.*unavai.*/.test(content.toLowerCase()) ||
      /.*indisp.*/.test(content.toLowerCase())
    ) {
      elem = emptyData[0].message
    }
  } catch (error) {
    //pass
  }
  try {
    if (/.*termi.*/.test(content.toLowerCase())) {
      elem = (
        <div
          container
          style={{ color: '#75198acc', width: '100%' }}
          className="center-x"
        >
          <div style={{ display: 'inline-block' }}>
            <HotelIcon />
            &nbsp;&nbsp;
          </div>
          <div
            item
            style={{ display: 'inline-block', fontSize: '60%' }}
            className="center-y"
          >
            <div>service</div>
            <div>terminé</div>
          </div>
        </div>
      )
    }
  } catch (error) {
    //pass
  }
  try {
    if (/.*retar.*/.test(content.toLowerCase())) {
      elem = (
        <div style={{ color: '#f6501e' }}>
          <DepartureBoardIcon />
          <span style={{ fontSize: '60%' }}>&nbsp;retardé</span>
        </div>
      )
    }
  } catch (error) {
    //pass
  }
  return (
    <div style={style(content, velib)}>
      <div className="center" style={{ height: `100%`, width: `100%` }}>
        {elem}
      </div>
    </div>
  )
}

const style = (content, velib) => ({
  display: `inline-block`,
  position: `relative`,
  height: `90%`,
  width: velib ? '24%' : `32%`,
  border: `1px solid #dddddd`,
  margin: `0 0.1rem`,
  padding: `0 0.5rem`,
  color: [...isHere, ...isComing].includes(content) ? 'orange' : 'black',
  overflow: `hidden`,
})
