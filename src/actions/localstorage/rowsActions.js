import { getData, updateData } from './generalActions'
import { getTerminus } from 'actions/fetching/ratp'

export async function row_reverseDirection(iOnglet, iPage, iRow) {
  const data = getData()
  const currentRow = data[iOnglet].pages[iPage].lines[iRow]
  let allDirections = []
  try {
    allDirections = await getTerminus(currentRow.mode, currentRow.line, currentRow.station)
  } catch (err) {
    return
  }
  const n = allDirections.length
  for (const [i, name] of allDirections.entries()) {
    if (name === currentRow.terminus) {
      currentRow.terminus = allDirections[(i + 1) % n]
      break
    }
  }
  data[iOnglet].pages[iPage].lines[iRow] = currentRow
  updateData(data)
}

export function row_delete(iOnglet, iPage, iRow) {
  const data = getData()
  data[iOnglet].pages[iPage].lines.splice(iRow, 1)
  updateData(data)
}

export function row_up(iOnglet, iPage, iRow) {
  if (iRow == 0) return
  const data = getData()
  const elem = data[iOnglet].pages[iPage].lines[iRow]
  // delete in current position
  data[iOnglet].pages[iPage].lines.splice(iRow, 1)
  data[iOnglet].pages[iPage].lines.splice(iRow - 1, 0, elem)
  updateData(data)
}

export function row_down(iOnglet, iPage, iRow) {
  const data = getData()
  const n = data[iOnglet].pages[iPage].lines.length
  if (iRow == n - 1) return
  const elem = data[iOnglet].pages[iPage].lines[iRow]
  // delete in current position
  data[iOnglet].pages[iPage].lines.splice(iRow, 1)
  data[iOnglet].pages[iPage].lines.splice(iRow + 1, 0, elem)
  updateData(data)
}
