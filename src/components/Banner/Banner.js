import bannerImg from 'assets/images/banner.png'
import omLogoImg from 'assets/images/omLogo.png'
import { setOngletPage } from 'actions/mainActions'
import SettingsIcon from '@mui/icons-material/Settings'
import { useLocation, useNavigate } from 'react-router-dom'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Grid, Link } from '@mui/material'
import { ratpYellow } from 'variables/styles'
import { routes } from 'routes'

export default function Banner() {
  const navigate = useNavigate()
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const per = 80
  return (
    <Grid container sx={{ height: 200, position: `relative` }}>
      <Grid
        item
        xs={12}
        sx={{ height: `${per}%`, bgcolor: ratpYellow }}
        className="center-x"
      >
        <img
          style={{ height: `100%` }}
          src={bannerImg}
          onClick={() => {
            setOngletPage(null, null)
            navigate('/')
          }}
        />
      </Grid>
      <Grid
        item
        xs={1}
        sx={{
          position: `absolute`,
          // fontSize: '2.7rem',
          left: 0,
          top: 0,
          zIndex: 10,
          padding: 1,
        }}
        className={`center `}
      >
        {isHomePage ? (
          <SettingsIcon color="disabled" onClick={() => navigate('/setting')} />
        ) : (
          <ArrowBackIcon color="disabled" onClick={() => navigate('/')} />
        )}
      </Grid>
      <Grid
        container
        sx={{ height: `${100 - per}%`, borderBottom: `1px solid #80808040` }}
        className="center-y"
      >
        <Grid
          item
          xs={12}
          onClick={() => navigate(0)}
          style={{ height: `100%` }}
        >
          <img style={{ height: `100%`, padding: 5 }} src={omLogoImg} />
        </Grid>
      </Grid>
    </Grid>
  )
}
