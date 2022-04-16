import { useNavigate } from 'react-router-dom'
import { setOngletPage } from 'actions/mainActions'
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'


export default function Footer(props) {
  const { onglets, iCurrentOnglet } = props
  const n = onglets.length
  const navigate = useNavigate()
  return (
    <div
      style={{
        height: '100%',
        // borderTop: '1px solid #dddddd',
        overflowX: 'scroll',
        overflowY: 'hidden',
        alignItems: 'flex-start',
      }}
      className="red"
    >
      {/* <Box> */}
      <BottomNavigation
        showLabels
        value={iCurrentOnglet}
        className="blue"
        sx={{
          height: '100%',
          width: '100%',
          alignItems: 'flex-start',
        }}
        fullWidth
      >
        {onglets.map(({ name, emoji, imgURL }, i) => {
          let logo = <LocationOnIcon />
          if (emoji != null) logo = emoji
          if (imgURL != null) logo = <img src={imgURL} />
          return (
            <BottomNavigationAction
              className="green"
              key={i}
              label={name}
              icon={logo}
              onClick={() => setOngletPage(i)}
              sx={{ fontSize: '2.5rem', height: '100%' }}
            />
          )
        })}
        <BottomNavigationAction
          key={n}
          // label={'new'}
          icon={<AddCircleOutlineIcon fontSize="4rem" />}
          onClick={() => navigate(`/addOnglet`)}
          sx={{ fontSize: '2.5rem', height: '100%' }}
        />
      </BottomNavigation>
      {/* </Box> */}
    </div>
  )
}
