import {
  ATTRIBUTE_ONGLET,
  RESET_ALL,
  UPLOAD_PAGE,
  GO_PAGE,
  RESET_PAGE,
} from "../actions/types"

const initalState = {
  iOnglet: null,
  iPage: 0,
  laps: null,
  page: []
};

export default (state = initalState, action) => {
  switch (action.type) {
    case ATTRIBUTE_ONGLET:
      return {
        ...initalState,
        iOnglet: action.payload.iOnglet,
        iPage: action.payload.iPage,
        laps: action.payload.laps,
      }

    case UPLOAD_PAGE:
      // fix latence bug
      if(action.payload.laps != state.laps){
        console.log("@@@@@@@@@@@@@@");
        return state
      }
      let newPage = state.page.map((row, i) => {
        if (i !== action.payload.i) {
          return row
        }
      })
      newPage[action.payload.i] = action.payload.row
      return {
        ...state,
        page: newPage,
      }
    case GO_PAGE:
      return { ...state, iPage: action.payload }
    case RESET_ALL:
      return initalState

    case RESET_PAGE:
      return { ...state, page: [] }

    default:
      return state
  }
}