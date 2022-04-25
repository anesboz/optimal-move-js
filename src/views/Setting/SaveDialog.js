import Banner from 'components/Banner/Banner'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { getData, ls_saveDatedData } from 'actions/localstorage/generalActions'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import CheckIcon from '@mui/icons-material/Check'
import SaveIcon from '@mui/icons-material/Save'
import UploadIcon from '@mui/icons-material/Upload'
import { Stack, Switch, TextField, Typography } from '@mui/material'
import { Fragment, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SaveDialog(props) {
  const navigate = useNavigate()
  const { onglet } = props
  const [open, setOpen] = useState(false)
  const [scroll, setScroll] = useState('paper')
  const [isCopyMode, setIsCopyMode] = useState(false)

  useEffect(() => {
    setOpen(props.open)
    // setScroll(props.open)
  }, [props])

  const handleClose = () => setOpen(false)

  const [copied, setCopied] = useState(false)
  const [saved, setSaved] = useState(false)
  const [dataName, setDataName] = useState('')

  const descriptionElementRef = useRef(null)
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [open])

  const data = onglet != null ? [onglet] : getData()
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      scroll={scroll}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle id="scroll-dialog-title">
        {onglet ? `Enregistrer l'onglet` : `Enregistrer la disposition`}
      </DialogTitle>
      <DialogContent dividers={scroll === 'paper'}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>Memoire</Typography>
          <Switch
            color="default"
            checked={isCopyMode}
            inputProps={{ 'aria-label': 'ant design' }}
            onChange={(event, cheked) => setIsCopyMode(cheked)}
          />
          <Typography>Copier</Typography>
        </Stack>
        <DialogContentText
          id="scroll-dialog-description"
          ref={descriptionElementRef}
          tabIndex={-1}
        ></DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label={isCopyMode ? 'Copier' : 'Save as'}
          type="email"
          fullWidth
          variant="standard"
          onChange={(event) => setDataName(event.target.value)}
          value={isCopyMode ? JSON.stringify(data) : dataName}
          placeholder={isCopyMode ? '' : 'name'}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            if (isCopyMode) {
              setCopied(true)
              setTimeout(() => setCopied(false), 2 * 1000)
              navigator.clipboard.writeText(JSON.stringify(data))
              return
            }
            setSaved(true)
            ls_saveDatedData(`saved_data_${dataName}`, data)
            setTimeout(() => {
              setOpen(false)
              if (onglet != null) navigate('/')
            }, 300)
          }}
          color={'success'}
          variant="contained"
        >
          {isCopyMode ? (
            <Fragment>
              {copied ? (
                <CheckIcon size="small" />
              ) : (
                <ContentCopyIcon size="small" />
              )}
              &nbsp; Copy{copied ? 'ed' : ''}
            </Fragment>
          ) : (
            <Fragment>
              {saved ? <CheckIcon size="small" /> : <SaveIcon size="small" />}
              &nbsp; Save{saved ? 'd' : ''}
            </Fragment>
          )}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
