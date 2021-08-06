import { FETCH_DATA, UPDATE_DIRECTION } from "../actions/types"

const initalState = {
  allOnglets: [],
}

export default (state = initalState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, allOnglets: action.payload }
    case UPDATE_DIRECTION:
      const {index , newQuery} = action.payload
      const [iOnglet, iPage, iRow] = index
      // return { ...state, 
      //         allOnglets: [...state.allOnglets, toString(action.payload.index[0]) : []] }
      let newState = state.allOnglets.map((e,i) =>{
        if(i != iOnglet) {
          return e
        } else {
          let newOgnlet = {...e}
          newOgnlet.list[iPage][iRow].query = newQuery
          return newOgnlet
        }
      })
      return { ...state, allOnglets: newState }
    default:
      return state
  }
}
