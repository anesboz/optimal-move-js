import { useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Button, TextField } from '@mui/material'
import Banner from 'components/Banner/Banner'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'
import { addOnglet } from 'actions/crud/ongletsCrud'
import { setOngletPage } from 'actions/mainActions'
import { getData } from 'actions/crud/generalCrud'

export default function AddOnglet() {
  const [name, setName] = useState()
  const [emoji, setEmoji] = useState()
  const [imgURL, setImgURL] = useState()

  const navigate = useNavigate()

  const [expanded, setExpanded] = useState('panel1')
  const handleChange = (panel) => (event, isExpanded) => setExpanded(isExpanded ? panel : false)

  return (
    <div style={{ width: '100%' }}>
      <ArrowBackIcon
        color="disabled"
        style={{
          position: 'absolute',
          margin: 10,
          left: 0,
          zIndex: 10,
        }}
        onClick={() => navigate(-1)}
      />
      <Banner />
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography color={name === null ? 'red' : ''}>
            Onglet*:
            {' '}
            {name ?? null}
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ textAlign: 'center' }}>
          <TextField
            id="field1"
            label="Nom de l'onglet"
            autoComplete="off"
            inputProps={{
              autoComplete: 'new-password', // disable autocomplete and autofill
            }}
            onChange={(event) => setName(event.target.value)}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography>
            Emoji :
            {' '}
            {emoji ? '✔️' : null}
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ textAlign: 'center' }}>
          <TextField
            id="field3"
            label="Emoji (facultatif)"
            autoComplete="off"
            inputProps={{
              autoComplete: 'new-password', // disable autocomplete and autofill
            }}
            onChange={(event) => setEmoji(event.target.value)}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography>
            Image :
            {' '}
            {imgURL ? '✔️' : null}
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ textAlign: 'center' }}>
          <TextField
            fullWidth
            id="field2"
            label="Image URL (facultatif)"
            autoComplete="off"
            inputProps={{
              autoComplete: 'new-password', // disable autocomplete and autofill
            }}
            onChange={(event) => setImgURL(event.target.value)}
          />
        </AccordionDetails>
      </Accordion>
      <div
        style={{
          textAlign: 'center',
          width: '100%',
          padding: '3rem',
        }}
      >
        <Button
          variant="contained"
          color="success"
          disabled={name == null || name.length === 0}
          fullWidth
          onClick={() => {
            const newOnglet = {
              name,
              emoji,
              imgURL,
              pages: []
            }
            addOnglet(newOnglet)
            // const n = getData().length
            // setOngletPage(n, 0)
            navigate('/')
          }}
        >
          Add Onglet
        </Button>
      </div>
    </div>
  )
}
