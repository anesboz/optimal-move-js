import { Avatar, IconButton } from '@mui/material'
import SyncSharpIcon from '@mui/icons-material/SyncSharp'
import loader from './utils/loader.gif'
import { useSnackbar } from 'notistack'
import { useState } from 'react'

export function RefreshList({ onClickAction = () => null, ...props }) {
  const { enqueueSnackbar } = useSnackbar()
  const [loading, setLoading] = useState(false)

  async function hundleClick() {
    if (loading) return
    setLoading(true)

    try {
      await onClickAction()
      enqueueSnackbar(`Liste synchronisée`, {
        variant: 'success',
      })
    } catch (err) {
      console.log(err.response?.data ?? err)
      const msg = err.response?.data ?? `Cannot syncro '${name}' collection`
      console.log(msg)
      enqueueSnackbar(msg, {
        variant: 'error',
      })
    }

    setLoading(false)
  }

  const title = loading ? `Synchronisation en cours` : `Rafraichir la liste`
  return (
    <div
      className={`center ${loading ? '' : 'hover_opacity'}`}
      title={title}
      {...props}
    >
      <IconButton
        onClick={hundleClick}
        className="center"
        style={{
          display: `inline-block`,
          height: `2rem`,
          cursor: loading ? `not-allowed` : undefined,
        }}
      >
        {loading ? <Avatar variant="square" src={loader} /> : <SyncSharpIcon />}
      </IconButton>
    </div>
  )
}
