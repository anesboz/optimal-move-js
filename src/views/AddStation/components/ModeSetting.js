import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Grid, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { assetsURL } from 'variables/constants'
import { renderDEVcomment } from './communs'
import {
  MAccordion,
  MAccordionDetails,
  MAccordionSummary,
} from 'components/MAccordionColored/MAccordionColored'
import { COLORS } from 'variables/styles'

const modeIcon = (mode) => assetsURL + mode + `/symbole.1634824971.svg`
const lineIcon = (mode, line, suffix = '') => {
  line = line?.toLowerCase()
  return assetsURL + mode + `/picto_${mode}_ligne-` + suffix + `${line}.svg`
}

/*
| `Metro`
| `Tramway`
| `Bus`
| `regionalRail`

  | `TrolleyBus`
  | `interregionalRail`
  | `RapidTransit`
  | `RailShuttle`
  | `Funicular`
  | `LocalTrain`
*/

export const transportModes = [
  {
    name: `Metro`,
    icon: modeIcon('metro'),
    lineIcon: (line) => lineIcon('metro', line),
  },
  {
    name: `Tramway`,
    icon: modeIcon('tram'),
    lineIcon: (line) => lineIcon('tram', line),
  },
  {
    name: `Bus`,
    icon: modeIcon('busratp'),
    lineIcon: (line) => lineIcon('busratp', line),
  },
]

export default function ModeSetting({
  order,
  modeHook,
  expandedHook,
  devMode,
}) {
  const [mode, setMode] = modeHook
  const [expanded, setExpanded] = expandedHook

  return (
    <Grid container>
      <Grid item sx={{ width: 10, bgcolor: COLORS[order] }}></Grid>
      <Grid item flex={1}>
        {renderDEVcomment({
          devMode,
          title: `Modes de transports (liste statique) `,
          content: (
            <>
              {transportModes.map((e, i) => {
                const suffix = i === transportModes.length - 1 ? '' : ' | '
                return (
                  <span key={i}>
                    <span
                      style={{ color: mode.name === e.name ? `orange` : `` }}
                    >
                      {`'${e.name}'`}
                    </span>
                    {suffix}
                  </span>
                )
              })}
            </>
          ),
        })}
        <MAccordion
          expanded={expanded === order}
          onChange={() => {
            setExpanded(expanded === order ? null : order)
          }}
        >
          <MAccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={name === null ? 'red' : ''}>
              {`Je prends le ${mode.name ?? '...'}`}
            </Typography>
            &nbsp;
            {renderRow(mode)}
          </MAccordionSummary>
          <MAccordionDetails style={{ textAlign: 'center' }}>
            <ToggleButtonGroup
              exclusive
              value={mode}
              onChange={(_, newMode) => {
                if (newMode == null) return
                setMode(newMode)
                setExpanded(order + 1)
              }}
            >
              {transportModes.map((oneMode, i) => {
                const selected = oneMode.name === mode.name
                return (
                  <ToggleButton
                    value={oneMode}
                    key={i}
                    sx={{
                      bgcolor: selected ? '#02819257' : undefined,
                    }}
                  >
                    {renderRow(oneMode)}
                  </ToggleButton>
                )
              })}
            </ToggleButtonGroup>
          </MAccordionDetails>
        </MAccordion>
      </Grid>
    </Grid>
  )
}

const renderRow = (e) => {
  if (e.name == null) return null
  return <img style={{ height: 30, padding: 2 }} src={e.icon} alt={e.name} />
}
