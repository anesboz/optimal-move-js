import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import SearchBarV from 'components/SearchBarV/SearchBarV'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { COLORS, ratpBLUE } from 'variables/styles'
import { renderDEVcomment } from './communs'
import { Grid } from '@mui/material'
import {
  MAccordion,
  MAccordionDetails,
  MAccordionSummary,
} from 'components/MAccordionColored/MAccordionColored'

export default function StopSetting({
  order,
  lineId,
  stopHook,
  expandedHook,
  devMode,
}) {
  const [stop, setStop] = stopHook
  const [expanded, setExpanded] = expandedHook

  const [filters, setFilters] = useState([])
  const disabled = lineId == null

  useEffect(() => {
    if (disabled) return
    const stops = []
    const query = `https://api-iv.iledefrance-mobilites.fr/lines/${lineId}/stops?stopPoints=true&routes=true`
    axios
      .get(query)
      .then((res) => {
        const data = res.data
        data.map((way) => {
          way.stops.map((stop) => {
            if (stops.every((j) => j.stopArea?.name != stop.stopArea?.name)) {
              stops.push(stop)
            }
          })
        })

        const filters = stops?.map((e) => {
          return {
            value: e.name,
            ...e,
          }
        })
        setFilters(filters)
      })
      .catch((err) => {
        const msg = err.response.data ?? err
        console.log(`🚩 . msg`, msg)
      })
  }, [lineId])

  return (
    <Grid container marginTop={3}>
      <Grid item sx={{ width: 10, bgcolor: COLORS[order] }}></Grid>
      <Grid item flex={1}>
        {renderDEVcomment({
          devMode,
          title: `Liste des stations de la ligne sélectionnée`,
          content: (
            <>
              <span>{`https://api-iv.iledefrance-mobilites.fr/lines/`}</span>
              <span style={{ color: lineId == null ? `red` : `orange` }}>
                {lineId ?? `NULL`}
              </span>
              <span>{`/stops?stopPoints=true&routes=true`}</span>
            </>
          ),
        })}
        <MAccordion
          expanded={expanded === order}
          onChange={() => {
            setExpanded(expanded === order ? null : order)
          }}
          disabled={disabled}
        >
          <MAccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={name === null ? 'red' : ''} className="center-y">
              {`Depuis la station `}
            </Typography>
            &nbsp;
            {renderChosenStop(stop)}
          </MAccordionSummary>
          <MAccordionDetails style={{ textAlign: 'center' }}>
            <SearchBarV
              // keyName={`stop`}
              multiple={false}
              filters={filters}
              setSelected={(newValue) => {
                const stop = newValue?.[0] ?? {}
                setStop(stop)
                if (Object.keys(stop).length === 0) return
                setExpanded(order + 1)
              }}
              // others
              title={`Sélectionner une station`}
              renderRow={renderRow}
            />
          </MAccordionDetails>
        </MAccordion>
      </Grid>
      
    </Grid>
  )
}

const renderRow = (e) => {
  if (e.name == null) return null
  return (
    <small>
      {`${e.name}`}
      &nbsp;
      <span style={{ opacity: 0.6, fontSize: `70%` }}>
        {`📍 ${e.stopArea?.city}`}
      </span>
    </small>
  )
}

const renderChosenStop = (e) => {
  if (e.name == null) return null
  return (
    <div className="center-y">
      <small
        style={{
          padding: 10,
          backgroundColor: ratpBLUE,
          color: `white`,
          fontWeight: `150%`,
        }}
      >
        {`${e.name}`}
      </small>
      &nbsp;
      <span style={{ opacity: 0.6, fontSize: `70%` }}>
        {`📍 ${e.stopArea?.city}`}
      </span>
    </div>
  )
}
