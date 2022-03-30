import bannerImg from "assets/images/banner.png"
import omLogoImg from "assets/images/omLogo.png"
import { Grid } from "@mui/material"
import { toggleDefaultIndexes } from "actions/ongletsTools"
import BuildIcon from "@mui/icons-material/Build"
import { Link } from "react-router-dom"

export default function Banner({ onClickImg }) {
  return (
    <Grid container>
      <Grid
        container
        sx={{
          height: `25vh`,
          backgroundColor: `#f9d119`,
        }}
        justifyContent={`center`}
        onClick={() => {
          if (onClickImg) onClickImg()
        }}
      >
        <img style={{ height: `100%` }} src={bannerImg} alt="bannerImg" />
      </Grid>
      <Grid
        container
        style={{ borderBottom: `1px solid #80808040` }}
        padding={1}
      >
        <Grid
          item
          // container
          sx={{ height: `4vh` }}
          onClick={() => {
            window.location.reload()
          }}
          xs={6}
        >
          <img style={{ height: `100%` }} src={omLogoImg} alt="omLogoImg" />
        </Grid>
        <Grid
          item
          xs={6}
          onClick={() => {
            const tmp = toggleDefaultIndexes()
            var str = `DEFAULT_INDEXES sont désormais :`
            str += tmp === `true` ? `activé` : `désactivé`
            alert(str)
          }}
        ></Grid>
      </Grid>
    </Grid>
  )
}
