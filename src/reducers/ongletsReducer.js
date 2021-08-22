import {
  ATTRIBUTE_ONGLET,
  RESET_ALL,
  UPLOAD_PAGE,
  GO_PAGE,
  RESET_PAGE,
} from "../actions/types"

const initalState = {
  currentOnglet: null,
  currentPage: 0,
  page: []
};

export default (state = initalState, action) => {
  switch (action.type) {
    case ATTRIBUTE_ONGLET:
      // console.log("ATTRIBUTE_ONGLET")
      // console.log(action.payload)
      return {
        ...initalState,
        currentOnglet: action.payload.iOnglet,
        currentPage: action.payload.iPage,
      }

    case UPLOAD_PAGE:
      // console.log("UPLOAD_PAGE")
      // console.log(action.payload)
      let clonePage = [...state.page ]
      clonePage[action.payload.i] = action.payload.row
      return {
        ...state,
        page: clonePage,
      }
    case GO_PAGE:
      return { ...state, currentPage: action.payload }
    case RESET_ALL:
      return initalState

    case RESET_PAGE:
      return {...state, page : {}}

    default:
      return state
  }
}