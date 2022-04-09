import bannerImg from 'assets/images/banner.png'
import omLogoImg from 'assets/images/omLogo.png'
import { toggleDefaultIndexes } from 'actions/ongletsTools'
import { setOngletPage } from 'actions/mainActions'
import SettingsIcon from '@mui/icons-material/Settings'

export default function Banner() {
  return (
    <div style={{ height: `100%` }}>
      <div
        style={{ height: `80%`, backgroundColor: `#f9d119` }}
        className="center-x"
      >
        <img
          style={{ height: `100%` }}
          src={bannerImg}
          alt="bannerImg"
          onClick={() => setOngletPage(null, null)}
        />
        <SettingsIcon
          color="disabled"
          style={{ position: 'absolute', margin: 10, right: 0, zIndex: 10 }}
          onClick={() => {
            const tmp = toggleDefaultIndexes()
            var str = `DEFAULT_INDEXES sont désormais :`
            str += tmp === `true` ? `activé` : `désactivé`
            alert(str)
          }}
        />
      </div>
      <div
        style={{
          height: `20%`,
          padding: 5,
          borderBottom: `1px solid #80808040`,
        }}
      >
        <div
          onClick={() => window.location.reload()}
          style={{ height: `90%` }}
          className="center-y"
        >
          <img style={{ height: `70%` }} src={omLogoImg} alt="omLogoImg" />
        </div>
      </div>
    </div>
  )
}
