import { useNavigate } from 'react-router-dom'
import { setOngletPage } from 'actions/mainActions'
import React, { useState, useEffect, useRef } from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'

export default function Footer(props) {
  const { onglets, iCurrentOnglet, iCurrentPage } = props
  const ratio = props.height
  const navigate = useNavigate()
  let x = 20

  return (
    <div
      style={{
        display: `block`,
        height: `100%`,
        overflowX: `scroll`,
        whiteSpace: `nowrap`,
        position: 'relative',
      }}
    >
      {[
        ...onglets,
        {
          name: 'new',
          emoji: <AddCircleOutlineIcon fontSize="4rem" />,
        },
      ].map(({ name, emoji, imgURL }, i) => {
        let logo = <AutoAwesomeIcon fontSize="4rem" />
        if (emoji != null) logo = emoji
        if (imgURL != null && imgURL?.length > 0) logo = null
        let y = x
        const noName = name == null || name?.length === 0
        if (noName) y = 0
        const selected = i === iCurrentOnglet
        return (
          <div
            style={{
              display: `inline-block`,
              height: `${ratio}rem`,
              width: `${ratio}rem`,
              border: `1px solid #dddddd`,
              borderLeft: `1px solid transparent`,
              // margin: `0 0.1rem`,
              padding: `0.5rem 0 `,
              overflow: `hidden`,
              // backgroundColor: selected ? '#1975d263' : `#f9d119`,
              backgroundColor: selected ? '#00AA91' : 'inherit',
              opacity: selected ? 1 : 0.5,
              // backgroundColor: `#00AA91`,
            }}
            key={i}
            onClick={(event) => {
              if (i === onglets.length) {
                navigate(`/addOnglet`)
              } else {
                setOngletPage(i, i === iCurrentOnglet ? iCurrentPage : 0)
              }
            }}
          >
            <div
              style={{
                height: `${100 - y}%`,
                fontSize: `${
                  ratio * (noName ? 0.4 : 0.34) * (selected ? 1.15 : 0.9)
                }rem`,
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
                fontSize: `80%`,
                color: 'white',
              }}
              className="center"
            >
              {name}
            </div>
          </div>
        )
      })}
    </div>
  )
}
