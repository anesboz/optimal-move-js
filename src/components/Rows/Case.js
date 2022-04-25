import React, { Fragment } from 'react'
import BusAlertIcon from '@mui/icons-material/BusAlert'

const isHere = [
  "Train a l'approche",
  "A l'approche",
  'Train a quai',
  "A l'arret",
]
const isComing = ['0 mn', '1 mn', '2 mn']

const problems = [
  'SERVICE TERMINE',
  'Schedules unavailable',
  'Service termine',
  'INFO INDISPO ....',
  'Train retarde',
  'SERVICE NON COMMENCE',
]

export default function Case(porps) {
  const { content, velib } = porps
  let unvailable = false
  try {
    unvailable = /.*unavai.*/.test(content) || /.*INDISP.*/.test(content)
  } catch (error) {
    //pass
  }
  return (
    <div style={style(content, velib)}>
      <div className="center" style={{ height: `100%`, width: `100%` }}>
        {unvailable ? (
          <div style={{ color: '#f25c5a91' }}>
            <BusAlertIcon />
            <span style={{ fontSize: '60%' }}>no data</span>
          </div>
        ) : (
          content
        )}
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
