import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { setOngletPage } from 'actions/mainActions'
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'

const OngletsContainer = styled.div`
  border-top: 1px solid #dddddd;
  overflow-x: scroll;
  overflow-y: hidden;
`

export default function Footer(props) {
  const { onglets, iCurrentOnglet } = props
  const n = onglets.length
  const navigate = useNavigate()
  return (
    <OngletsContainer>
      <Box>
        <BottomNavigation showLabels value={iCurrentOnglet}>
          {onglets.map(({ name, emoji, imgURL }, i) => {
            let logo = <LocationOnIcon />
            if (emoji != null) logo = emoji
            if (imgURL != null) logo = <img src={imgURL} />
            return (
              <BottomNavigationAction
                key={i}
                label={name}
                icon={logo}
                onClick={() => setOngletPage(i)}
              />
            )
          })}
          <BottomNavigationAction
            key={n}
            label={'new'}
            icon={<AddCircleOutlineIcon />}
            onClick={() => navigate(`/addOnglet`)}
          />
        </BottomNavigation>
      </Box>
    </OngletsContainer>
  )
}
