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
import { TextField } from '@mui/material'
import { useEffect, useRef, useState } from 'react'

export default function SaveDialog(props) {
  const { onglet } = props
  const [open, setOpen] = useState(false)
  const [scroll, setScroll] = useState('paper')

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

  const data = onglet ? [onglet] : JSON.stringify(getData())
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
        <DialogContentText
          id="scroll-dialog-description"
          ref={descriptionElementRef}
          tabIndex={-1}
        >
          {/* {data} */}
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Save as"
          type="email"
          fullWidth
          variant="standard"
          onChange={(event) => setDataName(event.target.value)}
          value={dataName}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            setCopied(true)
            setTimeout(() => setCopied(false), 2 * 1000)
            navigator.clipboard.writeText(data)
          }}
          color={'success'}
          variant={copied ? 'contained' : 'outlined'}
        >
          {copied ? (
            <CheckIcon size="small" />
          ) : (
            <ContentCopyIcon size="small" />
          )}
          &nbsp; Copy{copied ? 'ed' : ''}
        </Button>
        <Button
          onClick={() => {
            setSaved(true)
            ls_saveDatedData(`saved_data_${dataName}`, data)
            setTimeout(() => {
              setOpen(false)
            }, 300)
          }}
          color={'success'}
          variant="contained"
          // disabled={copied.length > 0}
        >
          {saved ? <CheckIcon size="small" /> : <SaveIcon size="small" />}
          &nbsp; Save{saved ? 'd' : ''}
        </Button>
      </DialogActions>
    </Dialog>
  )
}
