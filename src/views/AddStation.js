import react, { useEffect, useState } from "react"
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
import { Link } from "react-router-dom"

import { useLocation } from "react-router-dom"
import initialData from "data/initialData"
import { addStation } from "actions/crudAction"

export default function AddStation(props) {
  const location = useLocation()
  const { i_onglet, i_page } = location.state
  // console.log(`🚩 . state`, { i_onglet, i_page })

  const [mode, setMode] = useState(undefined)
  const [line, setLine] = useState(undefined)
  const [station, setStation] = useState(undefined)
  const [terminus, setTerminus] = useState(undefined)
  const [way, setWay] = useState(undefined)

  const initalLines = [`Loading ...`]
  const [allLines, setAllLines] = useState(initalLines)
  const [allstation, setAllstation] = useState([])
  const [allDestinations, setAllDestinations] = useState([])

  const [expanded, setExpanded] = useState(`panel1`)
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  // useEffect(() => {
  //   if (!mode) return
  //   axios.get(proxy + om_api(mode).linesURL).then((res) => {
  //     const tmp = res.data.result[properType(`api`, mode)].map((e) => e.code)
  //     const uniq = [...new Set(tmp)]
  //     setAllLines(uniq)
  //   })
  // }, [mode])

  // useEffect(() => {
  //   if (!line) return
  //   axios.get(proxy + om_api(mode).stationsURL + line).then((res) => {
  //     const tmp = res.data.result.stations
  //     const uniq = [...new Set(tmp)]
  //     setAllstation(uniq)
  //   })
  // }, [line])

  const modesButtons = [`metro`, `bus`, `tram`, `rer`].map((e) => ({
    value: e,
    imgSrc: om_assets(e).logoURL,
  }))
  return (
    <div style={{ width: `100%` }}>
      {/* <ArrowBackIcon style={{}} /> */}
      <Link to={`/`}>
        <ArrowBackIcon
          color="disabled"
          style={{ position: `absolute`, margin: 10, left: 0, zIndex: 10 }}
        />
      </Link>
      <Banner />
      {/* TAB1 */}
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography color={mode === null ? `red` : ``}>
            Mode de transport
          </Typography>
          {mode ? (
            <img
              style={{ height: `1.1em`, marginLeft: `1rem` }}
              src={om_assets(mode).logoURL}
            />
          ) : null}
        </AccordionSummary>
        <AccordionDetails style={{ textAlign: `center` }}>
          <ToggleButtons
            onSelect={(mode) => {
              setMode(mode)
              if (!mode) return
              setExpanded("panel2")
              axios.get(proxy + om_api(mode).linesURL).then((res) => {
                const tmp = res.data.result[properType(`api`, mode)].map(
                  (e) => e.code
                )
                const uniq = [...new Set(tmp)]
                setAllLines(uniq)
              })
              setLine(undefined)
              setStation(undefined)
            }}
            elements={modesButtons}
          />
        </AccordionDetails>
      </Accordion>
      {/* TAB2 */}
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        disabled={mode == null}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography color={line === null ? `red` : ``}>
            ligne à prendre{" "}
          </Typography>
          {line != null && mode != null ? (
            <img
              style={{ height: `1.1em`, marginLeft: `1rem` }}
              src={getLineImgURL(mode, line)}
            />
          ) : null}
        </AccordionSummary>
        <AccordionDetails>
          <Autocomplete
            // sx={{ width: 300 }}
            options={allLines}
            autoHighlight
            getOptionLabel={(line) => line}
            renderOption={(props, line) => (
              <Box
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                {allLines == initalLines ? null : (
                  <img
                    loading="lazy"
                    width="20"
                    // src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                    src={getLineImgURL(mode, line)}
                    // srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                    alt={line}
                  />
                )}
                {line}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                id="field1"
                {...params}
                label="Choose a line"
                autoComplete="off"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password", // disable autocomplete and autofill
                }}
              />
            )}
            onChange={(_, line) => {
              setLine(line)
              if (!line) return
              setExpanded("panel3")
              axios.get(proxy + om_api(mode).stationsURL + line).then((res) => {
                const tmp = res.data.result.stations
                const uniq = [...new Set(tmp)]
                setAllstation(uniq)
              })
            }}
            value={line}
          />
        </AccordionDetails>
      </Accordion>
      {/* TAB3 */}
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        disabled={mode == null || line == null}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography color={station === null ? `red` : ``}>
            Station {station ? <b>{station}</b> : null}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Autocomplete
            // sx={{ width: 300 }}
            options={allstation}
            autoHighlight
            getOptionLabel={(station) => station.name}
            renderOption={(props, station) => (
              <Box
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                {station.name}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Choose a line"
                autoComplete="off"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password", // disable autocomplete and autofill
                }}
              />
            )}
            onChange={(event, station) => {
              setStation(station?.slug)
              if (!station) return
              setExpanded("panel4")
              axios
                .get(proxy + om_api(mode).destinationsURL + line)
                .then((res) => {
                  const tmp = res.data.result.destinations
                  const destinations = [...new Set(tmp)]
                  // traiter le cas deux branch :
                  const rv = []
                  destinations.map((dest) => {
                    if (dest.name.includes(`/`)) {
                      const branch1 = dest.name.split(`/`)[0].trim()
                      const branch2 = dest.name.split(`/`)[1].trim()
                      rv.push({ name: branch1, way: dest.way })
                      rv.push({ name: branch2, way: dest.way })
                    } else {
                      rv.push(dest)
                    }
                  })
                  setAllDestinations(rv)
                })
            }}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        disabled={mode == null || line == null || station == null}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography color={terminus === null ? `red` : ``}>
            Terminus {terminus ? <b>{terminus}</b> : null}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl>
            {/* <FormLabel id="demo-radio-buttons-group-label">
              destination
            </FormLabel> */}
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              // defaultValue="female"
              name="radio-buttons-group"
              onChange={(_, value) => {
                const dest = allDestinations.filter((e) => e.name === value)[0]
                setWay(dest.way)
                setTerminus(dest.name)
                setExpanded(null)
              }}
            >
              {allDestinations.map((dest, i) => (
                <FormControlLabel
                  value={dest.name}
                  control={<Radio />}
                  label={dest.name}
                  key={i}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>
      <div
        style={{
          textAlign: `center`,
          width: `100%`,
          padding: `3rem`,
        }}
      >
        <Link
          to={`/`}
          state={{
            i_default_onglet: i_onglet,
            i_default_page: i_page,
          }}
        >
          <Button
            variant="contained"
            color="success"
            disabled={[mode, line, station, way, terminus].some(
              (e) => e == null
            )}
            fullWidth
            onClick={() => {
              const newStation = {
                mode,
                line,
                station,
                way,
                terminus,
              }
              addStation({ station: newStation, i_onglet, i_page })
            }}
          >
            Add Station
          </Button>
        </Link>
      </div>
    </div>
  )
}
