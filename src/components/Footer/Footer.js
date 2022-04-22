import { useNavigate } from 'react-router-dom'
import { setOngletPage } from 'actions/mainActions'
import React, { useState, useEffect, useRef } from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'

export default function Footer(props) {
  const { onglets, iCurrentOnglet, iCurrentPage } = props
  const navigate = useNavigate()
  const [parentHeight, setParentHeight] = useState(0)
  const ref = useRef(null)

  useEffect(() => setParentHeight(ref.current.clientHeight), [])

  const style = {
    display: `inline-block`,
    position: `relative`,
    height: `95%`,
    width: parentHeight,
    border: `1px solid #dddddd`,
    margin: `0 0.1rem`,
    padding: `0.5rem 0 `,
    overflow: `hidden`,
  }
  let x = 20

  return (
    <div
      style={{
        display: `block`,
        height: `100%`,
        overflowX: `scroll`,
        // overflowY: `hidden`,
        // overflow: `visible`,
        whiteSpace: `nowrap`,
        position: 'relative',
      }}
      ref={ref}
    >
      {/* <OngletMenu iOnglet={iCurrentOnglet} /> */}
      {[
        ...onglets,
        {
          name: 'new',
          emoji: (
            <AddCircleOutlineIcon
              fontSize="4rem"
              onClick={() => {
                navigate(`/addOnglet`)
              }}
            />
          ),
        },
      ].map(({ name, emoji, imgURL }, i) => {
        let logo = <AutoAwesomeIcon fontSize="4rem" />
        if (emoji != null) logo = emoji
        if (imgURL != null && imgURL?.length > 0) logo = null // <img style={{ height: '100%' }} src={imgURL} />
        let y = x
        const noName = name == null || name?.length === 0
        if (noName === true) y = 0
        const selected = i === iCurrentOnglet
        return (
          <div
            style={{
              ...style,
              // border: selected ? '3px solid #1975d263' : '1px solid #dddddd',
              // boxShadow: selected ? `#1975d2 0px 0px 15px inset` : '',
              // transform: `translate(0, ${selected ? '-5px' : 0})`,
              backgroundColor: selected ? '#1975d263' : '',
              opacity: selected ? 1 : 0.5,
            }}
            key={i}
            onClick={(event) =>
              setOngletPage(i, i === iCurrentOnglet ? iCurrentPage : 0)
            }
          >
            <div
              style={{
                height: `${100 - y}%`,
                fontSize: parentHeight * (noName ? 0.55 : 0.4),
                width: '100%',
                backgroundImage: `url(${imgURL})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
              className="center"
            >
              {logo}
            </div>
            <div
              style={{
                height: `${y}%`,
                transform: `translate(0, 2px)`,
                color: 'gray',
              }}
              className="center"
            >
              {name}
            </div>
          </div>
        )
      })}
      {/* <div style={style} onClick={() => navigate(`/addOnglet`)}>
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
            color: '#808080ad',
          }}
          className="center"
        >
          new
        </div>
      </div> */}
    </div>
  )
}
