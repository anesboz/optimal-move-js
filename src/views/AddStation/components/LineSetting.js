import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import SearchBarV from 'components/SearchBarV/SearchBarV'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Avatar, Grid } from '@mui/material'
import { renderDEVcomment } from './communs'
import {
  MAccordion,
  MAccordionDetails,
  MAccordionSummary,
} from 'components/MAccordionColored/MAccordionColored'
import { palette } from '@mui/system'
import { COLORS } from 'variables/styles'

export default function LineSetting({
  order,
  mode,
  lineHook,
  expandedHook,
  devMode,
}) {
  const [line, setLine] = lineHook
  const [expanded, setExpanded] = expandedHook
  const [filters, setFilters] = useState([])

  const [searchWord, setSearchWord] = useState(null)

  useEffect(() => {
    setSearchWord(null)
    setFilters([])
    setLine({})
  }, [mode])

  function getLines({ modeName, keyWords }) {
    return new Promise((resolve, reject) => {
      const query = `https://api-iv.iledefrance-mobilites.fr/lines?mode=${modeName}&q=${keyWords}`
      axios
        .get(query)
        .then((res) => {
          const data = res.data
          resolve(data)
        })
        .catch((err) => {
          const msg = err.response.data ?? err
          console.log(`🚩 . msg`, msg)
          resolve([])
        })
    })
  }

  const disabled = mode.name == null

  return (
    <Grid container marginTop={3}>
      <Grid item sx={{ width: 10, bgcolor: COLORS[order] }}></Grid>
      <Grid item flex={1}>
        {renderDEVcomment({
          devMode,
          title: `Liste des lignes ${mode.name ?? ``}`,
          content: (
            <>
              <span>{`https://api-iv.iledefrance-mobilites.fr/lines?mode=`}</span>
              <span style={{ color: mode.name == null ? `red` : `orange` }}>
                {mode.name ?? `NULL`}
              </span>
              <span>{`&q=`}</span>
              <span style={{ color: searchWord == null ? `red` : `orange` }}>
                {searchWord ?? `NULL`}
              </span>
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
              {`Ligne `}
            </Typography>
            &nbsp;
            {renderRow(mode)(line)}
          </MAccordionSummary>
          <MAccordionDetails style={{ textAlign: 'center' }}>
            <SearchBarV
              multiple={false}
              filters={filters}
              setSelected={(newValue) => {
                const line = newValue?.[0] ?? {}
                setLine(line)
                if (Object.keys(line).length === 0) return
                setExpanded(order + 1)
              }}
              updateFilters={async (keyWords) => {
                if (disabled) return
                const lines = await getLines({ modeName: mode.name, keyWords })

                const filters = lines?.map((e) => {
                  return {
                    value: e.label,
                    ...e,
                  }
                })
                setFilters(filters)
                setSearchWord(keyWords)
              }}
              renderRow={renderRow(mode)}
              // others
              title={`Sélectionner une ligne`}
            />
          </MAccordionDetails>
        </MAccordion>
      </Grid>
    </Grid>
  )
}

// const renderRow = (mode) => (e) => {
//   if (mode.lineIcon == null || e.label == null) return null
//   return (
//     <Grid container>
//       <Grid>
//         <Avatar
//           variant="rounded"
//           src={mode.lineIcon(e.label)}
//           style={{
//             height: 30,
//             display: `inline-block`,
//           }}
//         >
//           {e.label}
//         </Avatar>
//       </Grid>
//       &nbsp; &nbsp;
//       <smal>{`${e.from?.name ?? ''} 👉 ${e.to?.name ?? ''}`}</smal>
//     </Grid>
//   )
// }

// eslint-disable-next-line react/display-name
const renderRow = (mode) => (e) => {
  if (mode.lineIcon == null || e.label == null) return null
  const LIMIT = 15
  palette
  const from = e.from?.name?.slice(0, LIMIT) ?? ''
  const to = e.to?.name?.slice(0, LIMIT) ?? ''
  return (
    <Grid container>
      <Grid item>
        <Avatar
          variant="square"
          src={mode.lineIcon(e.label)}
          sx={{
            height: 30,
          }}
          imgProps={{ style: { objectFit: `initial` } }}
        >
          {e.label}
        </Avatar>
      </Grid>
      &nbsp;
      <Grid item className="center-y">{`${from} 👉 ${to}`}</Grid>
    </Grid>
  )
}
