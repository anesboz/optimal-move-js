import { useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Button, Grid, TextField } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { addOnglet } from 'actions/localstorage/ongletsActions'
import { getData } from 'actions/localstorage/generalActions'
import { getRandomEmoji } from 'actions/tools'
import MyOrdredAccrodion from 'components/MAccordionColored/MyOrdredAccrodion'

export default function AddOnglet() {
  const { state } = useLocation()
  let init_onglet = {}
  if (state?.iOnglet_toModify != null) {
    init_onglet = getData()[state?.iOnglet_toModify]
  }

  const [name, setName] = useState(init_onglet.name)
  const [emoji, setEmoji] = useState(init_onglet.emoji ?? getRandomEmoji()) //'😃'
  const [imgURL, setImgURL] = useState(init_onglet.imgURL)

  const navigate = useNavigate()

  const [expanded, setExpanded] = useState(0)
  const handleChange = (panel) => (event, isExpanded) =>
    setExpanded(isExpanded ? panel : false)

  const props1 = {
    order: 0,
    expandedHook: [expanded, setExpanded],
    title: `Onglet`,
    error: null,
    disabled: null,
    color: null,
    content: (
      <Grid container spacing={2}>
        <Grid item flex={1}>
          <TextField
            fullWidth
            label="Emoji (facultatif)"
            autoComplete="off"
            inputProps={{ autoComplete: 'new-password' }}
            onChange={(event) =>
              setEmoji(
                event.target.value.length === 0 ? null : event.target.value
              )
            }
            value={emoji ?? ''}
          />
        </Grid>
        <Grid item flex={1}>
          <TextField
            fullWidth
            label="Nom (facultatif)"
            autoComplete="off"
            inputProps={{ autoComplete: 'new-password' }}
            onChange={(event) =>
              setName(
                event.target.value.length === 0 ? null : event.target.value
              )
            }
            value={name ?? ''}
            placeholder={`Mon nouvel onglet`}
          />
        </Grid>
      </Grid>
    ),
  }
  const props2 = {
    order: 1,
    expandedHook: [expanded, setExpanded],
    title: `Image (facultatif) ${imgURL != null ? '✔️' : ''}`,
    error: null,
    disabled: null,
    color: null,
    content: (
      <TextField
        fullWidth
        label="Image URL (facultatif)"
        autoComplete="off"
        inputProps={{ autoComplete: 'new-password' }}
        onChange={(event) =>
          setImgURL(event.target.value.length === 0 ? null : event.target.value)
        }
        value={imgURL ?? ''}
      />
    ),
  }

  return (
    <Grid container>
      <MyOrdredAccrodion {...props1} />
      <MyOrdredAccrodion {...props2} />
      <Grid item justifyContent={`center`} sx={{ margin: `2rem auto` }}>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            const newOnglet = {
              name: name?.trim(),
              emoji: emoji?.trim(),
              imgURL: imgURL?.trim(),
              pages: init_onglet.pages ?? [],
            }
            addOnglet(newOnglet, state?.iOnglet_toModify)
            navigate('/')
          }}
        >
          Ajouter
        </Button>
      </Grid>
    </Grid>
  )
}
