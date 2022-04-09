import React, { Fragment, useEffect, useState } from 'react'
import styled from 'styled-components'
import loading from 'assets/icons/loading.gif'
import { getStationSchedule } from 'actions/mainActions'
import { isDayTime } from 'actions/ongletsTools'
import { getLineImgURL } from 'variables/data'
import { capitalizeFirstLetter } from 'actions/tools'
import MyMenu from 'components/Rows/RowMenu'
import { connect } from 'react-redux'

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
  const { content } = porps
  return (
    <div
      style={style(content)}
      // className="centerMe"
      // className={isHere.includes(content) ? 'blink' : '' + `center`}
    >
      <div className="center" style={{ height: `100%`, width: `100%` }}>
        {content}
      </div>
    </div>
  )
}

const style = (content) => ({
  display: `inline-block`,
  position: `relative`,
  height: `90%`,
  width: `32%`,
  border: `1px solid #dddddd`,
  margin: `0 0.1rem`,
  padding: `0 0.5rem`,
  color: [...isHere, ...isComing].includes(content) ? 'orange' : 'inital',
  // whiteSpace: `nowrap`,
  overflow: `hidden`,
  // textAlign: `center`,
  // verticalAlig: `center`,
  // lineHeight: `100%`,
})
