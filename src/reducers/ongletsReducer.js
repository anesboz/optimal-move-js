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
  page: {},
  home: false,
};

export default (state = initalState, action) => {
  switch (action.type) {
    case ATTRIBUTE_ONGLET:
      return {
        ...state,
        currentOnglet: action.payload,
        currentPage: 0,
      }

    case UPLOAD_PAGE:
      let clonePage = { ...state.page }
      clonePage[action.payload.row] = action.payload.data
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