import { useNavigate } from 'react-router-dom'
import { setOngletPage } from 'actions/mainActions'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import React, { useState, useEffect, useRef } from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'

export default function Footer(props) {
  const { onglets, iCurrentOnglet } = props
  const n = onglets.length
  const navigate = useNavigate()
  const [parentHeight, setParentHeight] = useState(0)
  const ref = useRef(null)

  useEffect(() => setParentHeight(ref.current.clientHeight))

  const style = {
    display: `inline-block`,
    position: `relative`,
    height: `100%`,
    width: parentHeight,
    border: `1px solid #dddddd`,
    margin: `0 0.1rem`,
    padding: `0.5rem 0 `,
    overflow: `hidden`,
  }
  const x = 20
  return (
    <div
      style={{
        display: `block`,
        height: `100%`,
        overflowX: `scroll`,
        overflowY: `hidden`,
        whiteSpace: `nowrap`,
      }}
      ref={ref}
    >
      {onglets.map(({ name, emoji, imgURL }, i) => {
        let logo = <AutoAwesomeIcon fontSize="4rem" />
        if (emoji != null || emoji?.length === 0) logo = emoji
        if (imgURL != null || imgURL?.length === 0)
          logo = <img style={{ height: '100%' }} src={imgURL} />

        const selected = i === iCurrentOnglet
        return (
          <div
            style={{
              ...style,
              backgroundImage: `url(${imgURL})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              border: selected ? '3px solid #1975d263' : '1px solid #dddddd',
              // boxShadow: selected ? `#1975d2 0px 0px 15px inset` : '',
              transform: `translate(0, ${selected ? '-5px' : 0})`,
            }}
            key={i}
            onClick={() => setOngletPage(i)}
          >
            <div
              style={{
                height: `${100 - x}%`,
                fontSize: parentHeight * 0.4,
                width: '100%',
              }}
              className="center"
            >
              {/* {logo}     */}
            </div>
            <div
              style={{
                height: `${x}%`,
                transform: `translate(0, 2px)`,
              }}
              className="center"
            >
              {name}
            </div>
          </div>
        )
      })}
      <div style={style} onClick={() => navigate(`/addOnglet`)}>
        <div
          style={{
            height: `${100 - x}%`,
            fontSize: parentHeight * 0.4,
            width: '100%',
            transform: `translate(0, 4px)`,
          }}
          className="center"
        >
          <AddCircleOutlineIcon fontSize="4rem" />
        </div>
        <div
          style={{
            height: `${x}%`,
            transform: `translate(0, 2px)`,
          }}
          className="center"
        >
          new
        </div>
      </div>
    </div>
  )
}
