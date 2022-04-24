import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useEffect, useState } from 'react'
import { page_delete } from 'actions/localstorage/pagesActions'
import { onglet_delete } from 'actions/localstorage/ongletsActions'

export default function DeleteDialog(props) {
  const { iOnglet, iPage } = props
  const [openDialog, setOpenDialog] = useState(false)
  const isPage = props.open === 'page'
  useEffect(
    () =>
      setOpenDialog(
        props.open == null || props.open.length === 0 ? false : true
      ),
    [props.open]
  )
  return (
    <div>
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {isPage
            ? `Supprimer la page actuelle ?`
            : `Supprimer l'onglet actuel ?`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {isPage
              ? `Vous etes sur le point de supprimer la page actuelle avec tous ses lignes`
              : `Toutes les pages et lignes de cet onglet seront supprimés`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              if (isPage) page_delete(iOnglet, iPage)
              else onglet_delete(iOnglet)
            }}
            color="error"
          >
            Delete
          </Button>
          <Button onClick={() => setOpenDialog(false)} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
