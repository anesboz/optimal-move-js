import { Button } from '@mui/material'
import { deleteData, getData } from 'actions/crud/generalCrud'

export default function TestsButtons() {
  return (
    <div style={{ display: `flex`, position: `absolute` }}>
      <Button
        onClick={() => console.log(getData())}
        variant="contained"
        color="success"
      >
        Log Data
      </Button>
      <Button
        onClick={deleteData}
        variant="contained"
        color="error"
      >
        Delete Data
      </Button>
    </div>
  )
}
