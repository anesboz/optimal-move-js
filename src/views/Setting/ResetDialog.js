import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useEffect, useState } from 'react'
import { deleteData } from 'actions/localstorage/generalActions'

export default function ResetDialog(props) {
  const handleClose = () => setOpenDialog(false)
  const [openDialog, setOpenDialog] = useState(false)

  useEffect(() => {
    setOpenDialog(props.open)
  }, [props])

  return (
    <div>
      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {props.mode === 'factory'
            ? `Valeurs d'usine ?`
            : `Supprimer la disposition actuelle ?`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.mode === 'factory'
              ? `Seront supprimés : l'historique des dispoitions enregistrées, le cache, la disposition actuelle.  `
              : `Vous etes sur le point de supprimer la disposition actuelle (onglets et pages)`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              if (props.mode === 'factory') deleteData()
              else localStorage.removeItem('data')
              setOpenDialog(false)
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
