import { useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ToggleButtons from 'components/ToggleButtons/ToggleButtons'
import { Autocomplete, Box, Button, Grid, TextField } from '@mui/material'
import { getLineImgURL, omAssets } from 'variables/data'
import CachedIcon from '@mui/icons-material/Cached'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import Banner from 'components/Banner/Banner'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'
import { page_addRow } from 'actions/localstorage/pagesActions'
import { connect } from 'react-redux'
import { getLines, getStations, getWays } from 'actions/fetching/ratp'

function AddStation(props) {
  const { iCurrentOnglet, iCurrentPage } = props.mainBranch
  const [mode, setMode] = useState()

  const [allLines, setAllLines] = useState([])
  const [line, setLine] = useState()

  const [allstations, setAllstations] = useState([])
  const [station, setStation] = useState()

  const [allDestinations, setAllDestinations] = useState([])
  const [terminus, setTerminus] = useState()
  const [way, setWay] = useState()

  const navigate = useNavigate()
  const [expanded, setExpanded] = useState('panel1')
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  const modesButtons = ['metro', 'bus', 'tram', 'rer', 'noctilien'].map(
    (e) => ({
      value: e,
      imgSrc: omAssets(e).logoURL,
    })
  )
  return (
    <div style={{ height: `100vh` }}>
      <div style={{ position: `relative`, height: `30%` }}>
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
      </div>
      {/* TAB1 */}
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography color={mode === null ? 'red' : ''}>
            Mode de transport
          </Typography>
          {mode ? (
            <img
              style={{ height: '1.1em', marginLeft: '1rem' }}
              src={omAssets(mode).logoURL}
              alt={mode}
            />
          ) : null}
        </AccordionSummary>
        <AccordionDetails style={{ textAlign: 'center' }}>
          <ToggleButtons
            onSelect={(newMode) => {
              // mode > line > station > terminus > way
              setMode(newMode)
              // initialisation
              setAllLines([])
              setLine()

              setAllstations([])
              setStation()

              setAllDestinations([])
              setTerminus()
              setWay()

              if (!newMode) return
              getLines(newMode).then((lines) => setAllLines(lines))
              setExpanded('panel2')
            }}
            elements={modesButtons}
          />
        </AccordionDetails>
      </Accordion>
      {/* TAB2 */}
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
        disabled={mode == null}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography color={line === null ? 'red' : ''}>
            ligne à prendre
          </Typography>
          {line != null && mode != null ? (
            <img
              style={{ height: '1.1em', marginLeft: '1rem' }}
              src={getLineImgURL(mode, line)}
              alt={mode}
            />
          ) : null}
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Grid item mob={1} className="center">
              <CachedIcon
                color="disabled"
                onClick={() =>
                  getLines(mode).then((lines) => setAllLines(lines))
                }
              />
            </Grid>
            <Grid item mob={11}>
              <Autocomplete
                options={allLines}
                autoHighlight
                getOptionLabel={(newLine) => newLine}
                renderOption={(props, newLine) => (
                  <Box
                    component="li"
                    sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                    {...props}
                  >
                    <img
                      loading="lazy"
                      width="20"
                      src={getLineImgURL(mode, newLine)}
                      alt={newLine}
                    />
                    {newLine}
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
                      autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                  />
                )}
                onChange={(_, newLine) => {
                  // mode > line > station > terminus > way
                  setLine(newLine)
                  // initialisation
                  setAllstations([])
                  setStation()

                  setAllDestinations([])
                  setTerminus()
                  setWay()

                  if (!newLine) return
                  setExpanded('panel3')
                  getStations(mode, newLine).then((res) => setAllstations(res))
                  getWays(mode, newLine).then((ways) =>
                    setAllDestinations(ways)
                  )
                }}
                value={line}
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      {/* TAB3 */}
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
        disabled={mode == null || line == null}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography color={station === null ? 'red' : ''}>
            Station {station ? <b>{station}</b> : null}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Grid item mob={1} className="center">
              <CachedIcon
                color="disabled"
                onClick={() =>
                  getStations(mode, line).then((res) => setAllstations(res))
                }
              />
            </Grid>
            <Grid item mob={11}>
              <Autocomplete
                options={allstations}
                autoHighlight
                getOptionLabel={(newStation) => newStation.name}
                renderOption={(props, newStation) => (
                  <Box
                    component="li"
                    sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                    {...props}
                  >
                    {newStation.name}
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Choose a line"
                    autoComplete="off"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                  />
                )}
                onChange={(event, newStation) => {
                  setStation(newStation?.slug)
                  if (!newStation) return
                  setExpanded('panel4')
                }}
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
        disabled={mode == null || line == null || station == null}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography color={terminus === null ? 'red' : ''}>
            Terminus {terminus ? <b>{terminus}</b> : null}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container>
            <Grid item mob={1} className="center">
              <CachedIcon
                color="disabled"
                onClick={() =>
                  getWays(mode, line).then((ways) => setAllDestinations(ways))
                }
              />
            </Grid>
            <Grid item mob={11}>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  onChange={(_, value) => {
                    const dest = allDestinations.filter(
                      (e) => e.name === value
                    )[0]
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
            </Grid>
          </Grid>
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
          disabled={[mode, line, station, way, terminus].some((e) => e == null)}
          fullWidth
          onClick={() => {
            const newStation = {
              mode,
              line,
              station,
              way,
              terminus,
            }
            page_addRow(iCurrentOnglet, iCurrentPage, newStation)
            navigate(-1)
          }}
        >
          Add Station
        </Button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  mainBranch: state.mainBranch,
})

export default connect(mapStateToProps)(AddStation)
