import { READ_ONGLETS, UPDATE_DIRECTION, ADD_STATION } from "../actions/types"

const initalState = {
  allOnglets: [],
}

export default (state = initalState, action) => {
  switch (action.type) {
    case READ_ONGLETS:
      return { ...state, allOnglets: action.payload }

    case UPDATE_DIRECTION:
      const { index, newQuery } = action.payload
      const [iOnglet, iPage, iRow] = index

      let newState = state.allOnglets.map((e, i) => {
        if (i != iOnglet) {
          return e
        } else {
          let newOgnlet = { ...e }
          newOgnlet.list[iPage][iRow].query = newQuery
          return newOgnlet
        }
      })
      return { ...state, allOnglets: newState }

    case ADD_STATION:
      // const [newRow, iPage, iOnglet] = action.payload.
      console.log(action.payload)
      console.log(state.allOnglets)
      let allOngletsUpdated = state.allOnglets.map((e, i) => {
        if (i != action.payload.iOnglet) {
          return e
        } else {
          console.log("&&&&&&&&&&&&&")
          let newOgnlet = { ...e }
          newOgnlet.list[action.payload.iPage].push(action.payload.newRow)
          console.log(action.payload.newRow)
          return newOgnlet
        }
      })
      return { ...state, allOnglets: allOngletsUpdated }
    default:
      return state
  }
}
