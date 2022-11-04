import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { COLORS } from 'variables/styles'
import { Grid } from '@mui/material'
import {
  MAccordion,
  MAccordionDetails,
  MAccordionSummary,
} from 'components/MAccordionColored/MAccordionColored'

export default function MyOrdredAccrodion({
  order,
  expandedHook,
  title,
  error = false,
  disabled = false,
  color,
  content,
}) {
  color = color ?? COLORS[order]
  const [expanded, setExpanded] = expandedHook
  return (
    <Grid container marginTop={3}>
      <Grid item sx={{ width: 10, bgcolor: color }}></Grid>
      <Grid item flex={1}>
        <MAccordion
          expanded={expanded === order}
          onChange={() => {
            setExpanded(expanded === order ? null : order)
          }}
          disabled={disabled}
        >
          <MAccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={error ? 'red' : ''} className="center-y">
              {title}
            </Typography>
          </MAccordionSummary>
          <MAccordionDetails style={{ textAlign: 'center' }}>
            {content}
          </MAccordionDetails>
        </MAccordion>
      </Grid>
    </Grid>
  )
}
