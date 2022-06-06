import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { getData } from 'actions/localstorage/generalActions'
import CheckIcon from '@mui/icons-material/Check'
import { Fragment, useEffect, useRef, useState } from 'react'
import UploadIcon from '@mui/icons-material/Upload'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import {
  Checkbox,
  FormGroup,
  Stack,
  Switch,
  TextField,
  Typography,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

export default function LoadDialog(props) {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [scroll, setScroll] = useState('paper')

  useEffect(() => {
    setOpen(props.open)
  }, [props])

  const handleClose = () => setOpen(false)

  const [loaded, setLoaded] = useState(false)
  const [paste, setPaste] = useState('')

  const descriptionElementRef = useRef(null)
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [open])

  const [selected, setSelected] = useState([])

  const all = Object.entries({ ...localStorage })
    .map(([key, value]) => ({ key, data: JSON.parse(value) }))
    .filter(({ key }) => key.includes('saved_data_'))

  const [isCopyMode, setIsCopyMode] = useState(false)
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      scroll={scroll}
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle id="scroll-dialog-title">
        Charger une disposition
      </DialogTitle>
      <DialogContent dividers={scroll === 'paper'}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography>Memoire</Typography>
          <Switch
            checked={isCopyMode}
            inputProps={{ 'aria-label': 'ant design' }}
            onChange={(event, cheked) => setIsCopyMode(cheked)}
            color="default"
          />
          <Typography>Coller</Typography>
        </Stack>
        <FormControl style={{ display: 'block' }}>
          {isCopyMode ? (
            <TextField
              id="field1"
              label="Paste here"
              placeholder="[{}]"
              onChange={(event) => setPaste(event.target.value)}
              fullWidth
              value={paste}
            />
          ) : (
            <Fragment>
              <FormLabel id="demo-radio-buttons-group-label">
                {all.length === 0 ? `Pas de dispositions enregistrées` : null}
              </FormLabel>
              <FormGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                {all.map((saved, i) => {
                  return (
                    <FormControlLabel
                      value={saved.key}
                      control={<Checkbox />}
                      label={
                        <p>
                          <b>{saved.key?.split('saved_data_')[1]}</b> &nbsp;
                          {saved.data?.date}
                        </p>
                      }
                      key={i}
                      onChange={(event) => {
                        if (event.target.checked) {
                          setSelected([...selected, saved.key])
                        } else {
                          setSelected(selected.filter((e) => e != saved.key))
                        }
                      }}
                    />
                  )
                })}
              </FormGroup>
            </Fragment>
          )}
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button
          disabled={selected.length === 0 && !isCopyMode}
          style={{ display: isCopyMode ? 'none' : undefined }}
          onClick={() => {
            selected.map((e) => localStorage.removeItem(e))
            setOpen(false)
          }}
          color={'error'}
          variant={'outlined'}
        >
          <DeleteForeverIcon size="small" />
          &nbsp; Delete
        </Button>

        <Button
          disabled={
            (!isCopyMode && selected.length === 0) ||
            (isCopyMode && paste?.length === 0)
          }
          onClick={() => {
            setLoaded(true)
            setTimeout(() => navigate('/'), 300)
            if (isCopyMode) {
              localStorage.setItem(
                'data',
                JSON.stringify([...getData(), ...JSON.parse(paste)])
              )
              return
            }
            const onglets = all
              .filter((e) => selected.includes(e.key))
              .map((e) => e.data.value)

            localStorage.setItem(
              'data',
              JSON.stringify([...getData(), ...onglets.flat()])
            )
          }}
          color={'success'}
          variant={loaded ? 'contained' : 'outlined'}
        >
          {loaded ? <CheckIcon size="small" /> : <UploadIcon size="small" />}
          &nbsp; Load
        </Button>
      </DialogActions>
    </Dialog>
  )
}
