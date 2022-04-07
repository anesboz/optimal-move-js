import { getData, updateData } from './generalCrud'
import { omApi } from 'variables/data'
import axios from 'axios'
import { proxy } from 'variables/constants'

export function row_getWays(mode, line) {
  return new Promise((resolve, reject) => {
    axios
      .get(proxy + omApi(mode).destinationsURL + line)
      .then((res) => {
        const tmp = res.data.result.destinations
        const destinations = [...new Set(tmp)]
        // traiter le cas deux branch :
        const rv = []
        destinations.forEach((dest) => {
          if (dest.name.includes('/')) {
            const branch1 = dest.name.split('/')[0].trim()
            const branch2 = dest.name.split('/')[1].trim()
            rv.push({ name: branch1, way: dest.way })
            rv.push({ name: branch2, way: dest.way })
          } else {
            rv.push(dest)
          }
        })
        resolve(rv)
      })
      .catch((err) => reject(err))
  })
}
export async function row_reverseDirection(iOnglet, iPage, iRow) {
  const data = getData()
  const currentRow = data[iOnglet].pages[iPage].lines[iRow]
  console.log(`🚩 . avant`, currentRow)
  const allDirections = await row_getWays(currentRow.mode, currentRow.line)
  console.log(`🚩 . allDirections`, allDirections)
  const n = allDirections.length
  for (const [i, { name }] of allDirections.entries()) {
    if (name === currentRow.terminus) {
      currentRow.way = allDirections[(i + 1) % n].way
      currentRow.terminus = allDirections[(i + 1) % n].name
      break
    }
  }
  console.log(`🚩 . apres`, currentRow)
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
