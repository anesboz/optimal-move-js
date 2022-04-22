import bannerImg from 'assets/images/banner.png'
import omLogoImg from 'assets/images/omLogo.png'
import { setOngletPage } from 'actions/mainActions'
import SettingsIcon from '@mui/icons-material/Settings'
import { useLocation, useNavigate } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { capitalizeFirstLetter } from 'actions/tools'

export default function Banner() {
  const navigate = useNavigate()
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  return (
    <div>
      <div
        style={{ height: `75%`, backgroundColor: `#f9d119` }}
        className="center-x"
      >
        <img
          style={{ height: `13rem` }}
          src={bannerImg}
          alt="bannerImg"
          onClick={() => setOngletPage(null, null)}
        />
        {isHomePage ? (
          <SettingsIcon
            color="disabled"
            style={{ position: 'absolute', margin: 10, right: 0, zIndex: 10 }}
            onClick={() => navigate('/setting')}
          />
        ) : (
          <ArrowBackIcon
            color="disabled"
            style={{
              position: 'absolute',
              margin: 10,
              left: 0,
              zIndex: 10,
            }}
            onClick={() => navigate('/')}
          />
        )}
      </div>
      <div
        onClick={() => window.location.reload()}
        style={{
          height: `2.7rem`,
          // border: `1px solid green`,
          borderBottom: `1px solid #80808040`,
        }}
        className="center-y"
      >
        <img
          style={{ height: `87%`, padding: 5 }}
          src={omLogoImg}
          alt="omLogoImg"
        />
      </div>
      {isHomePage ? null : (
        <Breadcrumbs
          aria-label="breadcrumb"
          style={{
            marginLeft: 14,
            marginTop: 8,
            opacity: 0.4,
          }}
        >
          <Typography fontSize="small" color="inheritinherit">
            Optimal Move
          </Typography>
          <Typography fontSize="small" color="text.primary">
            {capitalizeFirstLetter(location.pathname.replace('/', ''))}
          </Typography>
        </Breadcrumbs>
      )}
    </div>
  )
}
