import { Fragment, useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Autocomplete,
  Box,
  Button,
  CircularProgress,
  Grid,
  LinearProgress,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material'
import { getLineImgURL, omAssets } from 'variables/data'
import CachedIcon from '@mui/icons-material/Cached'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import Banner from 'components/Banner/Banner'
import { useLocation, useNavigate, Navigate } from 'react-router-dom'
import { page_addRow } from 'actions/localstorage/pagesActions'
import { connect } from 'react-redux'
import { getLines, getStations, getWays } from 'actions/fetching/ratp'
import { getData } from 'actions/localstorage/generalActions'
import { velib_getData, velib_getStationsNames } from 'actions/fetching/velib'

function AddStation(props) {
  const { iCurrentOnglet, iCurrentPage } = props.mainBranch
  if (iCurrentOnglet == null || iCurrentPage == null)
    return <Navigate to="/" replace />

  const navigate = useNavigate()
  const { state } = useLocation()

  let initalRow = {}
  if (state?.iRow != null) {
    // edit row.mode
    const storedRow =
      getData()[iCurrentOnglet]?.pages?.[iCurrentPage]?.lines?.[state.iRow]
    initalRow = storedRow ?? initalRow
  }

  const [row, setRow] = useState(initalRow)

  const isVelibRow = row.mode === 'velib'

  const [allVelib, setAllVelib] = useState([])

  const [allLines, setAllLines] = useState([])

  const [allstations, setAllstations] = useState([])

  const [allWays, setAllWays] = useState([])

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

  useEffect(() => {
    if (isVelibRow) {
      setAllVelib([])
      velib_getStationsNames().then((res) => setAllVelib(res))
    } else {
      setAllLines([])
      getLines(row.mode).then((lines) => setAllLines(lines))
    }
  }, [row.mode])

  useEffect(() => {
    if (isVelibRow) return
    setAllstations([])
    getStations(row.mode, row.line).then((stations) => setAllstations(stations))

    setAllWays([])
    getWays(row.mode, row.line).then((ways) => setAllWays(ways))
  }, [row.mode, row.line])

  return (
    <div style={{ height: `100vh` }}>
      <Banner />
      <div style={{ marginTop: 20 }}>
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
            <Typography color={row.mode === null ? 'red' : ''}>
              Mode de transport
            </Typography>
            {row.mode ? (
              <img
                style={{ height: '1.1em', marginLeft: '1rem' }}
                src={omAssets(row.mode).logoURL}
                alt={row.mode}
              />
            ) : null}
          </AccordionSummary>
          <AccordionDetails style={{ textAlign: 'center' }}>
            <ToggleButtonGroup
              exclusive
              value={row.mode}
              onChange={(_, newMode) => {
                setRow({ mode: newMode })
                if (!newMode) return
                setExpanded('panel2')
              }}
              aria-label="text alignment"
            >
              {modesButtons.map((e, i) => {
                if (!e.value) return null
                return (
                  <ToggleButton
                    value={e.value}
                    aria-label="left aligned"
                    key={i}
                    disabled={e.value == `rer`}
                    style={{
                      backgroundColor: row.mode == e.value ? '#02819257' : '',
                    }}
                  >
                    <img style={{ height: `2em` }} src={e.imgSrc} />
                  </ToggleButton>
                )
              })}
            </ToggleButtonGroup>
          </AccordionDetails>
        </Accordion>
        {/* c'est ici que ca se passe */}
        {isVelibRow ? velib() : transports()}
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
            disabled={
              (!isVelibRow &&
                [row.mode, row.line, row.station, row.way].some(
                  (e) => e == null
                )) ||
              (isVelibRow && [row.mode, row.line].some((e) => e == null))
            }
            fullWidth
            onClick={() => {
              page_addRow(iCurrentOnglet, iCurrentPage, row, state?.iRow)
              navigate('/')
              // console.log(`🚩 . row`, row)
            }}
          >
            Add Station
          </Button>
        </div>
      </div>
    </div>
  )

  function velib() {
    return (
      <Fragment>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
          disabled={row.mode == null}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography color={row.line === null ? 'red' : ''}>
              velib station code
            </Typography>
            {row.line != null && row.mode != null ? (
              <b>&nbsp;{row.line}</b>
            ) : null}
          </AccordionSummary>
          <AccordionDetails>
            <Grid container>
              <Grid item mob={1} className="center">
                {allVelib.length === 0 ? (
                  <CircularProgress size={24} />
                ) : (
                  <CachedIcon
                    color="disabled"
                    onClick={() => {
                      setRow({ ...row, mode: row.mode })
                    }}
                  />
                )}
              </Grid>
              <Grid item mob={11}>
                <Autocomplete
                  options={allVelib}
                  value={row.line}
                  autoHighlight
                  getOptionLabel={(newLine) => newLine}
                  renderOption={(props, newLine) => (
                    <Box
                      component="li"
                      sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                      {...props}
                    >
                      {newLine}
                    </Box>
                  )}
                  renderInput={(params) => (
                    <TextField
                      id="field1"
                      {...params}
                      label="set a velib station code"
                      placeholder="42703"
                    />
                  )}
                  onChange={(event, newLine) => {
                    setRow({ ...row, line: newLine })
                  }}
                />
              </Grid>
            </Grid>

            {/* <TextField
              fullWidth
              label="set a velib station code"
              onChange={(event) => {
                setLine(event.target.value)
              }}
              placeholder="42703"
              value={row.line}
            /> */}
          </AccordionDetails>
        </Accordion>
        {/* TAB3 */}
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
          disabled={row.mode == null || row.line == null}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography color={row.station === null ? 'red' : ''}>
              Station name
              {row.station ? <b>&nbsp;{row.station}</b> : null}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              fullWidth
              label="Choose a station name"
              onChange={(event) => {
                setRow({ ...row, station: event.target.value })
              }}
              value={row.station}
            />
          </AccordionDetails>
        </Accordion>
      </Fragment>
    )
  }

  function transports() {
    return (
      <Fragment>
        {/* TAB2 */}
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
          disabled={row.mode == null}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography color={row.line === null ? 'red' : ''}>
              ligne à prendre
            </Typography>
            {row.line != null && row.mode != null ? (
              <img
                style={{ height: '1.1em', marginLeft: '1rem' }}
                src={getLineImgURL(row.mode, row.line)}
                alt={row.mode}
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
                    onClick={() => setRow({ ...row })}
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
                        src={getLineImgURL(row.mode, newLine)}
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
                    setRow({ ...row, line: newLine })
                    if (!newLine) return
                    setExpanded('panel3')
                  }}
                  value={row.line ?? ''}
                />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        {/* TAB3 Station */}
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
          disabled={row.mode == null || row.line == null}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography color={row.station === null ? 'red' : ''}>
              Station {row.station ? <b>{row.station}</b> : null}
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
                      setRow({ ...row, mode: row.mode, line: row.line })
                    }}
                  />
                )}
              </Grid>
              <Grid item mob={11}>
                <Autocomplete
                  value={
                    row.station != null
                      ? { name: row.station, slug: row.station }
                      : ''
                  }
                  options={allstations}
                  autoHighlight
                  getOptionLabel={(newStation) => newStation.name ?? ''}
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
                    setRow({ ...row, station: newStation?.slug })
                    if (!newStation) return
                    setExpanded('panel4')
                  }}
                />
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
        {/* TAB3 way */}
        <Accordion
          expanded={expanded === 'panel4'}
          onChange={handleChange('panel4')}
          disabled={row.mode == null || row.line == null || row.station == null}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography color={row.way === null ? 'red' : ''}>
              Way{' '}
              {row.way ? (
                <b>
                  {allWays.find((e) => e.way === row.way)?.terminus.join(' / ')}
                </b>
              ) : null}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                onChange={(_, value) => {
                  setRow({ ...row, way: value })
                  // const dest = allTerminus.find((e) => e === value)
                  setExpanded(null)
                }}
                value={row.way ?? ''}
              >
                {allWays.map((obj, i) => {
                  const { way, terminus } = obj
                  return (
                    <FormControlLabel
                      value={way}
                      control={<Radio />}
                      label={terminus.join(' / ')}
                      key={i}
                    />
                  )
                })}
              </RadioGroup>
            </FormControl>
            {allWays.length === 0 ? <LinearProgress /> : null}
          </AccordionDetails>
        </Accordion>
        {/* TAB3 Terminus */}
        {row.way == null ||
        allWays.find((e) => e.way === row.way)?.terminus?.length == 1 ? null : (
          <Accordion
            expanded={expanded === 'panel5'}
            onChange={handleChange('panel5')}
            disabled={
              row.mode == null || row.line == null || row.station == null
            }
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5bh-content"
              id="panel5bh-header"
            >
              <Typography>
                Terminus {row.terminus ? <b>{row.terminus}</b> : null}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                  onChange={(_, value) => {
                    setRow({
                      ...row,
                      terminus: value != 'whatever' ? value : null,
                    })
                    setExpanded(null)
                  }}
                  defaultValue="whatever"
                >
                  <FormControlLabel
                    value="whatever"
                    control={<Radio />}
                    label="peu importe"
                  />
                  {allWays
                    .find((e) => e.way === row.way)
                    ?.terminus.map((terminus, i) => {
                      return (
                        <FormControlLabel
                          value={terminus}
                          control={<Radio />}
                          label={terminus}
                          key={i}
                        />
                      )
                    })}
                </RadioGroup>
              </FormControl>
              {allWays.length === 0 ? <LinearProgress /> : null}
            </AccordionDetails>
          </Accordion>
        )}
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  mainBranch: state.mainBranch,
})

export default connect(mapStateToProps)(AddStation)
