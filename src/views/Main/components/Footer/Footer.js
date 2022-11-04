import { useNavigate } from 'react-router-dom'
import { setOngletPage } from 'actions/mainActions'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import { Grid } from '@mui/material'
import { gridStyle } from 'variables/styles'
import { getData } from 'actions/localstorage/generalActions'

export default function Footer(props) {
  const { iOnglet, iPage } = props
  const onglets = getData()
  const ratio = props.height
  const navigate = useNavigate()
  let x = 20

  const arret = `4rem`

  return (
    <Grid
      container
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        height: arret,
        width: `100%`,
      }}
      className={`center-x`}
    >
      <Grid
        item
        {...gridStyle}
        className={`green`}
        style={{
          backgroundColor: '#00a88f80',
          height: `100%`,
        }}
      >
        <div
          style={{
            display: `block`,
            height: `100%`,
            overflowX: `scroll`,
            overflowY: `hidden`,
            whiteSpace: `nowrap`,
            position: 'relative',
          }}
          className="customScroll-H"
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
            const selected = i === iOnglet
            return (
              <div
                style={{
                  display: `inline-block`,
                  cursor: `pointer`,
                  height: `100%`,
                  width: arret,
                  border: `1px solid #dddddd`,
                  borderLeft: `1px solid transparent`,
                  padding: `0.5rem 0 `,
                  overflow: `hidden`,
                  backgroundColor: selected ? '#00AA91' : 'inherit',
                  opacity: selected ? 1 : 0.6,
                }}
                key={i}
                onClick={() => {
                  if (i === onglets.length) {
                    return navigate(`/addOnglet`)
                  }
                  setOngletPage(i, i === iOnglet ? iPage : 0)
                }}
              >
                <div
                  style={{
                    height: `${100 - y}%`,
                    fontSize: `${
                      ratio * (noName ? 0.6 : 0.44) * (selected ? 1.15 : 0.9)
                    }rem`,
                    width: '100%',
                    backgroundImage: `url(${imgURL})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    transform: `translate(0px, ${noName ? 0 : -3}px)`,
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
      </Grid>
    </Grid>
  )
}
