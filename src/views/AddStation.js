import { useState } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ToggleButtons from 'components/Choisir/ToggleButtons'
import { Autocomplete, Box, Button, TextField } from '@mui/material'
import { getLineImgURL, omApi, omAssets, properType } from 'variables/data'
import axios from 'axios'
import { proxy } from 'variables/constants'

import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import Banner from 'components/Banner/Banner'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'
import { page_addRow } from 'actions/crud/pagesCrud'
import { connect } from 'react-redux'
import { row_getWays } from 'actions/crud/rowsCrud'

function AddStation(props) {
  const { iCurrentOnglet, iCurrentPage } = props.mainBranch
  console.log(`🚩 . iCurrentPage`, iCurrentPage)
  console.log(`🚩 . iCurrentOnglet`, iCurrentOnglet)
  const [mode, setMode] = useState(undefined)
  const [line, setLine] = useState(undefined)
  const [station, setStation] = useState(undefined)
  const [terminus, setTerminus] = useState(undefined)
  const [way, setWay] = useState(undefined)

  const initalLines = ['Loading ...']
  const [allLines, setAllLines] = useState(initalLines)
  const [allstation, setAllstation] = useState([])
  const [allDestinations, setAllDestinations] = useState([])
  console.log(`🚩 . allDestinations`, allDestinations)

  const navigate = useNavigate()
  const [expanded, setExpanded] = useState('panel1')
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  // useEffect(() => {
  //   if (!mode) return
  //   axios.get(proxy + omApi(mode).linesURL).then((res) => {
  //     const tmp = res.data.result[properType(`api`, mode)].map((e) => e.code)
  //     const uniq = [...new Set(tmp)]
  //     setAllLines(uniq)
  //   })
  // }, [mode])

  // useEffect(() => {
  //   if (!line) return
  //   axios.get(proxy + omApi(mode).stationsURL + line).then((res) => {
  //     const tmp = res.data.result.stations
  //     const uniq = [...new Set(tmp)]
  //     setAllstation(uniq)
  //   })
  // }, [line])

  const modesButtons = ['metro', 'bus', 'tram', 'rer'].map((e) => ({
    value: e,
    imgSrc: omAssets(e).logoURL,
  }))
  return (
    <div style={{ width: '100%' }}>
      <ArrowBackIcon
        color="disabled"
        style={{ position: 'absolute', margin: 10, left: 0, zIndex: 10 }}
        onClick={() => navigate(-1)}
      />
      <Banner />
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
              setMode(newMode)
              if (!newMode) return
              setExpanded('panel2')
              axios.get(proxy + omApi(newMode).linesURL).then((res) => {
                let tmp = res.data.result[properType('api', newMode)]
                tmp = tmp.map((e) => e.code)
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
          <Autocomplete
            // sx={{ width: 300 }}
            options={allLines}
            autoHighlight
            getOptionLabel={(newLine) => newLine}
            renderOption={(props, newLine) => (
              <Box
                component="li"
                sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                {allLines === initalLines ? null : (
                  <img
                    loading="lazy"
                    width="20"
                    // src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                    src={getLineImgURL(mode, newLine)}
                    // srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                    alt={newLine}
                  />
                )}
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
              setLine(newLine)
              if (!newLine) return
              setExpanded('panel3')
              axios
                .get(proxy + omApi(mode).stationsURL + newLine)
                .then((res) => {
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
          <Autocomplete
            // sx={{ width: 300 }}
            options={allstation}
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
              row_getWays(mode, line).then((res) => setAllDestinations(res))
            }}
          />
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
