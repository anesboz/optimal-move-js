import { ATTRIBUTE_ONGLET, RESET, UPLOAD_PAGE } from "../actions/types";

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
        currentPage: 0
      };
    
      case UPLOAD_PAGE:
        let clonePage = {...state.page}
        clonePage[action.payload.row] = action.payload.data
        return {
          ...state,
          page: clonePage,
        }
    
    case RESET:
      return initalState;
    
    default:
      return state
  }
}