import bannerImg from 'assets/images/banner.png'
import omLogoImg from 'assets/images/omLogo.png'
import meteoImg from 'assets/images/meteo.png'
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
    <div style={{ width: `100%` }}>
      <div
        style={{ height: `75%`, backgroundColor: `#f9d119` }}
        className="center-x"
      >
        <img
          style={{ height: `13rem` }}
          src={bannerImg}
          alt="bannerImg"
          onClick={() => {
            setOngletPage(null, null)
            navigate('/')
          }}
        />
        {isHomePage ? (
          <SettingsIcon
            color="disabled"
            style={{
              position: 'absolute',
              padding: 10,
              fontSize: '2.7rem',
              zIndex: 10,
              right: 0,
            }}
            onClick={() => navigate('/setting')}
          />
        ) : (
          <ArrowBackIcon
            color="disabled"
            style={{
              position: 'absolute',
              padding: 10,
              fontSize: '2.7rem',
              zIndex: 10,
              left: 0,
            }}
            onClick={() => navigate('/')}
          />
        )}
      </div>
      <div
        style={{
          height: `2.7rem`,
          borderBottom: `1px solid #80808040`,
        }}
        className="center-y"
      >
        <img
          style={{ height: `87%`, padding: 5 }}
          src={omLogoImg}
          alt="omLogoImg"
          onClick={() => {
            if (location.pathname === '/') return navigate(0)
            navigate('/')
          }}
        />
        <div
          style={{ height: `100%`, padding: 5, margin: 'auto 10px auto auto' }}
        >
          {/* <img
            style={{ height: `87%` }}
            src={meteoImg}
            alt="meteoImg"
            onClick={() =>
              (window.location.href =
                'https://weather.com/fr-FR/temps/aujour/l/1a8af5b9d8971c46dd5a52547f9221e22cd895d8d8639267a87df614d0912830')
            }
          /> */}
        </div>
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
