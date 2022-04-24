import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { getData } from 'actions/localstorage/generalActions'
import CheckIcon from '@mui/icons-material/Check'
import { Fragment, useEffect, useRef, useState } from 'react'
import UploadIcon from '@mui/icons-material/Upload'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import { Checkbox, FormGroup } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function LoadDialog(props) {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [scroll, setScroll] = useState('paper')

  useEffect(() => {
    setOpen(props.open)
  }, [props])

  const handleClose = () => setOpen(false)

  const [loaded, setLoaded] = useState(false)

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
        <DialogContentText
          id="scroll-dialog-description"
          ref={descriptionElementRef}
          tabIndex={-1}
        >
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              {all.length === 0
                ? `Pas de dispositions enregistrées`
                : `Dispositions disponibles :`}
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
          </FormControl>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          disabled={all.length === 0}
          onClick={() => {
            setLoaded(true)
            // setOpen(false)
            setTimeout(() => navigate('/'), 300)
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
