import react, { Fragment, useEffect, useState } from "react"
import Accordion from "@mui/material/Accordion"
import AccordionDetails from "@mui/material/AccordionDetails"
import AccordionSummary from "@mui/material/AccordionSummary"
import Typography from "@mui/material/Typography"
import SettingsIcon from "@mui/icons-material/Settings"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import ToggleButtons from "components/Choisir/ToggleButtons"
import {
  Autocomplete,
  Box,
  Button,
  Grid,
  Slider,
  TextField,
} from "@mui/material"
import { getLineImgURL, om_api, om_assets, properType } from "variables/data"
import axios from "axios"
import { proxy } from "variables/constants"

import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"
import Banner from "components/Banner/Banner"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { useNavigate } from "react-router-dom"

import { useLocation } from "react-router-dom"
import initialData from "data/initialData"
import { addStation } from "actions/crud/rowsCrud"
import { addOnglet } from "actions/crud/ongletsCrud"

export default function AddOnglet(props) {
  const [title, setTitle] = useState()
  const [emoji, setEmoji] = useState()
  const [imgURL, setImgURL] = useState()
  
  const navigate = useNavigate()

  const [expanded, setExpanded] = useState(`panel1`)
  const handleChange = (panel) => (event, isExpanded) =>
    setExpanded(isExpanded ? panel : false)

  return (
    <div style={{ width: `100%` }}>
      <ArrowBackIcon
        color="disabled"
        style={{ position: `absolute`, margin: 10, left: 0, zIndex: 10 }}
        onClick={() => navigate(-1)}
      />
      <Banner />
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography color={title === null ? `red` : ``}>
            Onglet*: {title ?? null}
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ textAlign: `center` }}>
          <TextField
            id="field1"
            label="Nom de l'onglet"
            autoComplete="off"
            inputProps={{
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
            onChange={(event) => setTitle(event.target.value)}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography>Emoji : {emoji ? `✔️` : null}</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ textAlign: `center` }}>
          <TextField
            id="field3"
            label="Emoji (facultatif)"
            autoComplete="off"
            inputProps={{
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
            onChange={(event) => setEmoji(event.target.value)}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography>Image : {imgURL ? `✔️` : null}</Typography>
        </AccordionSummary>
        <AccordionDetails style={{ textAlign: `center` }}>
          <TextField
            fullWidth
            id="field2"
            label="Image URL (facultatif)"
            autoComplete="off"
            inputProps={{
              autoComplete: "new-password", // disable autocomplete and autofill
            }}
            onChange={(event) => setImgURL(event.target.value)}
          />
        </AccordionDetails>
      </Accordion>
      <div
        style={{
          textAlign: `center`,
          width: `100%`,
          padding: `3rem`,
        }}
      >
        <Button
          variant="contained"
          color="success"
          disabled={title == null || title.length === 0}
          fullWidth
          onClick={() => {
            const newOnglet = {
              title,
              emoji,
              imgURL,
            }
            addOnglet({ onglet: newOnglet })
            navigate(`/`)
          }}
        >
          Add Onglet
        </Button>
      </div>
    </div>
  )
}
