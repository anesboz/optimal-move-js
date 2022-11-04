import { useEffect, useState } from 'react'
import ModeSetting from './components/ModeSetting'
import LineSetting from './components/LineSetting'
import StopSetting from './components/StopSetting'
import axios from 'axios'
import { obj_groupBy } from 'utils/objectManager'
import {
  Button,
  FormControlLabel,
  FormGroup,
  Grid,
  Switch,
} from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSnackbar } from 'notistack'
import { renderDEVcomment } from './components/communs'

export default function AddStation(props) {
  // navigation
  // const { iOnglet, iPage } = props.mainBranch
  // if (iOnglet == null || iPage == null) {
  //   return <Navigate to="/" replace />
  // }
  const navigate = useNavigate()
  const { state } = useLocation()

  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    return
    const { iOnglet, iPage } = state ?? {}
    if (iOnglet == null || iPage == null) {
      enqueueSnackbar(`Sélectionner un onglet d'abord`, {
        variant: 'error',
      })
      navigate('/')
    }
  }, [state])

  const [devMode, setDevMode] = useState(false)

  const [expanded, setExpanded] = useState(0)

  const [mode, setMode] = useState({})
  const [line, setLine] = useState({})
  const [stop, setStop] = useState({})
  const brutRow = { mode, line, stop }

  function getTimes({ lineId, stop_areaID }) {
    return new Promise((resolve, reject) => {
      const query = `https://api-iv.iledefrance-mobilites.fr/lines/v2/${lineId}/stops/${stop_areaID}/realTime`
      console.log(`🚩 . query`, query)
      axios
        .get(query)
        .then((res) => {
          const { data, statusCode } = res.data.nextDepartures
          const ret = obj_groupBy(data, `lineDirection`, (e) => e.time)
          resolve(ret)
        })
        .catch((err) => {
          const msg = err.response.data ?? err
          console.log(`🚩 . msg`, msg)
          resolve([])
        })
    })
  }

  useEffect(() => {
    async function test() {
      const lineID = line.id
      const stop_areaID = stop.stopArea?.id
      if (lineID == null || stop_areaID == null) {
        return console.log(`Information manquantes`)
      }

      const res = await getTimes({ lineID, stop_areaID })
      console.log(`🚩 . res`, res)
    }

    test()
  }, [line, stop])

  return (
    <Grid container className="">
      <Grid container justifyContent={`flex-end`} padding={1}>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={devMode}
                onChange={(event) => setDevMode(event.target.checked)}
              />
            }
            label="Mode développeur"
          />
        </FormGroup>
      </Grid>
      <ModeSetting
        order={0}
        modeHook={[mode, setMode]}
        expandedHook={[expanded, setExpanded]}
        devMode={devMode}
      />
      <LineSetting
        order={1}
        mode={mode}
        lineHook={[line, setLine]}
        expandedHook={[expanded, setExpanded]}
        devMode={devMode}
      />
      <StopSetting
        order={2}
        lineId={line.id}
        stopHook={[stop, setStop]}
        expandedHook={[expanded, setExpanded]}
        devMode={devMode}
      />
      <Grid item justifyContent={`center`} sx={{ margin: `2rem auto` }}>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            console.log(`🚩 . success`)
          }}
        >
          Ajouter
        </Button>
      </Grid>
      {!devMode
        ? null
        : renderDEVcomment({
            devMode,
            title: `Horaires en temps réel`,
            content: (
              <>
                <span>{`https://api-iv.iledefrance-mobilites.fr/lines/v2/`}</span>
                <span style={{ color: line.id == null ? `red` : `orange` }}>
                  {line.id ?? `NULL`}
                </span>
                <span>{`/stops/`}</span>
                <span
                  style={{
                    color: stop.stopArea?.id == null ? `red` : `orange`,
                  }}
                >
                  {stop.stopArea?.id ?? `NULL`}
                </span>
                <span>{`/realTime`}</span>
              </>
            ),
          })}
    </Grid>
  )
}
