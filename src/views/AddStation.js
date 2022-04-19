import { Fragment, useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ToggleButtons from 'components/ToggleButtons/ToggleButtons'
import {
  Autocomplete,
  Box,
  Button,
  CircularProgress,
  Grid,
  TextField,
} from '@mui/material'
import { getLineImgURL, omAssets } from 'variables/data'
import CachedIcon from '@mui/icons-material/Cached'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import Banner from 'components/Banner/Banner'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useLocation, useNavigate } from 'react-router-dom'
import { page_addRow } from 'actions/localstorage/pagesActions'
import { connect } from 'react-redux'
import { getLines, getStations, getTerminus } from 'actions/fetching/ratp'
import { getData } from 'actions/localstorage/generalActions'

function AddStation(props) {
  const { iCurrentOnglet, iCurrentPage } = props.mainBranch
  const { state } = useLocation()
  let init_row = {}
  if (state?.iRow != null) {
    init_row = getData()[iCurrentOnglet].pages[iCurrentPage].lines[state?.iRow]
  }

  const [mode, setMode] = useState(init_row.mode)

  const [allLines, setAllLines] = useState([])
  const [line, setLine] = useState(init_row.line)

  const [allstations, setAllstations] = useState([])
  const [station, setStation] = useState(init_row.station)

  const [allTerminus, setAllTerminus] = useState([])
  const [terminus, setTerminus] = useState(init_row.terminus)

  const navigate = useNavigate()
  const [expanded, setExpanded] = useState('panel1')
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  const modesButtons = ['metro', 'bus', 'tram', 'noctilien', 'velib'].map(
    (e) => ({
      value: e,
      imgSrc: omAssets(e).logoURL,
    })
  )

  return (
    <div style={{ height: `100vh` }}>
      <div
        style={{ position: `relative`, height: `30%` }}
        onClick={() => navigate('/')}
      >
        <ArrowBackIcon
          color="disabled"
          style={{
            position: 'absolute',
            margin: 10,
            left: 0,
            zIndex: 10,
          }}
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
            value={mode}
            onSelect={(newMode) => {
              // mode > line > station > terminus
              setMode(newMode)
              // initialisation
              setAllLines([])
              setLine(init_row.line)

              setAllstations([])
              setStation(init_row.station)

              setAllTerminus([])
              setTerminus(init_row.terminus)

              if (!newMode) return
              getLines(newMode).then((lines) => setAllLines(lines))
              setExpanded('panel2')
            }}
            elements={modesButtons}
          />
        </AccordionDetails>
      </Accordion>
      {mode === 'velib' ? velib() : transports()}
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
          disabled={[mode, line, station].some((e) => e == null)}
          fullWidth
          onClick={() => {
            const newStation = {
              mode,
              line,
              station,
              terminus,
            }
            page_addRow(iCurrentOnglet, iCurrentPage, newStation, state?.iRow)
            navigate('/')
          }}
        >
          Add Station
        </Button>
      </div>
    </div>
  )

  function velib() {
    return (
      <Fragment>
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
              velib station code
            </Typography>
            {line != null && mode != null ? <b>&nbsp;{line}</b> : null}
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              fullWidth
              label="set a velib station code"
              onChange={(event) => {
                setLine(event.target.value)
              }}
            />
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
              Station name
              {station ? <b>&nbsp;{station}</b> : null}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              fullWidth
              label="Choose a station name"
              onChange={(event) => {
                setStation(event.target.value)
              }}
            />
          </AccordionDetails>
        </Accordion>
      </Fragment>
    )
  }

  function transports(params) {
    return (
      <Fragment>
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
                {allLines.length === 0 ? (
                  <CircularProgress size={24} />
                ) : (
                  <CachedIcon
                    color="disabled"
                    onClick={() => {
                      setAllLines([])
                      getLines(mode, false).then((lines) => setAllLines(lines))
                    }}
                  />
                )}
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
                    // mode > line > station > terminus
                    setLine(newLine)
                    // initialisation
                    setAllstations([])
                    setStation(init_row.station)

                    setAllTerminus([])
                    setTerminus(init_row.terminus)

                    if (!newLine) return
                    setExpanded('panel3')
                    getStations(mode, newLine).then((res) =>
                      setAllstations(res)
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
                {allstations.length === 0 ? (
                  <CircularProgress size={24} />
                ) : (
                  <CachedIcon
                    color="disabled"
                    onClick={() => {
                      setAllstations([])
                      getStations(mode, line).then((lines) =>
                        setAllstations(lines)
                      )
                    }}
                  />
                )}
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
                    setAllTerminus([])
                    setExpanded('panel4')
                    getTerminus(mode, line, newStation?.slug).then((ways) =>
                      setAllTerminus(ways)
                    )
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
                {allTerminus.length === 0 ? (
                  <CircularProgress size={24} />
                ) : (
                  <CachedIcon
                    color="disabled"
                    onClick={() => {
                      setAllTerminus([])
                      getTerminus(mode, line, station).then((lines) =>
                        setAllTerminus(lines)
                      )
                    }}
                  />
                )}
              </Grid>
              <Grid item mob={11}>
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    onChange={(_, value) => {
                      // const dest = allTerminus.find((e) => e === value)
                      setTerminus(value)
                      setExpanded(null)
                    }}
                  >
                    {allTerminus.map((dest, i) => (
                      <FormControlLabel
                        value={dest}
                        control={<Radio />}
                        label={dest}
                        key={i}
                      />
                    ))}
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  mainBranch: state.mainBranch,
})

export default connect(mapStateToProps)(AddStation)
