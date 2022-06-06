import Banner from 'components/Banner/Banner'
import Button from '@mui/material/Button'
import SaveIcon from '@mui/icons-material/Save'
import UploadIcon from '@mui/icons-material/Upload'
import ResetIcon from '@mui/icons-material/DeleteForever'
import { useState } from 'react'
import SaveDialog from './Dialogs/SaveDialog'
import LoadDialog from './Dialogs/loadDialog'
import ResetDialog from './Dialogs/ResetDialog'
import { Grid } from '@mui/material'
import { useLocation } from 'react-router-dom'
import PhoneAndroidTwoToneIcon from '@mui/icons-material/PhoneAndroidTwoTone'
import axios from 'axios'

export default function Setting() {
  const { state } = useLocation()
  const [open, setOpen] = useState(state?.mode ?? false)
  const [lastClick, setLastClick] = useState(0)

  const handleClickOpen = (name) => () => {
    setLastClick(new Date().getTime())
    setOpen(name)
  }

  return (
    <div style={{ height: `100vh` }}>
      <Banner />
      <Grid container direction="column">
        <Button onClick={handleClickOpen('save')} style={{ paddingTop: 20 }}>
          <SaveIcon size="small" /> &nbsp; Save data
        </Button>
        <Button onClick={handleClickOpen('load')} style={{ paddingTop: 20 }}>
          <UploadIcon size="small" /> &nbsp; Load data
        </Button>
        <Button onClick={handleClickOpen('reset')} style={{ paddingTop: 20 }}>
          <ResetIcon size="small" /> &nbsp; Supprimer les onglets actuels
        </Button>
        <Button
          onClick={handleClickOpen('factory')}
          color="error"
          style={{ paddingTop: 20 }}
        >
          <ResetIcon size="small" /> &nbsp; {`Valeurs d'usine`}
        </Button>
        <Button
          onClick={() => {
            window.location = `https://github.com/anesboz/optimal-move-android-app/raw/master/APP_HERE/optimal-move.apk`
          }}
          color="info"
          style={{ paddingTop: 20 }}
        >
          <PhoneAndroidTwoToneIcon size="small" />
          &nbsp;
          {` Télécharger l'application`}
        </Button>
      </Grid>

      <SaveDialog
        open={open === 'save'}
        onglet={state?.onglet}
        lastClick={lastClick}
      />
      <LoadDialog open={open === 'load'} lastClick={lastClick} />
      <ResetDialog
        open={open === 'reset' || open === 'factory'}
        mode={open}
        lastClick={lastClick}
      />
    </div>
  )
}
