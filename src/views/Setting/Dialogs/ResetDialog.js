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
  const { open, mode } = props
  const handleClose = () => setOpenDialog(false)
  const [openDialog, setOpenDialog] = useState(false)
  const isFactory = mode === 'factory'
  useEffect(() => setOpenDialog(open), [props])
  const navigate = useNavigate()
  return (
    <div>
      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {isFactory
            ? `Valeurs d'usine ?`
            : `Supprimer la disposition actuelle ?`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {isFactory
              ? `Seront supprimés : l'historique des dispoitions enregistrées, le cache, la disposition actuelle.  `
              : `Vous etes sur le point de supprimer la disposition actuelle (onglets et pages)`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              if (isFactory) deleteData()
              else localStorage.removeItem('data')
              // setOpenDialog(false)
              navigate('/')
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
