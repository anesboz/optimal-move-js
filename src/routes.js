import DirectionsTransitIcon from '@mui/icons-material/DirectionsTransit'
import Main from 'views/Main/Main'
import GpsFixedIcon from '@mui/icons-material/GpsFixed'
import AddStation from 'views/AddStation/AddStation'
import AddOnglet from 'views/addOnglet/AddOnglet'
import TurnedInIcon from '@mui/icons-material/TurnedIn'
import Setting from 'views/Setting/Setting'

export const routes = [
  {
    name: `Optimal Move`,
    path: `/`,
    icon: DirectionsTransitIcon,
    element: Main,
  },
  {
    name: `Ajouter une station`,
    path: `/AddStation`,
    icon: GpsFixedIcon,
    element: AddStation,
  },
  {
    name: `Ajouter un onglet`,
    path: `/AddOnglet`,
    icon: TurnedInIcon,
    element: AddOnglet,
  },
  {
    name: `Ajouter un onglet`,
    path: `/AddOnglet`,
    icon: TurnedInIcon,
    element: Setting,
  },
]
