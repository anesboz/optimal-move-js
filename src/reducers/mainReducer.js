import { SET_ONGLET_PAGE, REFRESH, REFRESH_VELIB } from '../actions/types'

const initalState = {
  iCurrentOnglet: null,
  iCurrentPage: null,
  lastRefresh: null,
  lastRefreshVelib: null,
}

export default (state = initalState, action) => {
  switch (action.type) {
    case SET_ONGLET_PAGE:
      var { iOnglet, iPage } = action.payload
      return {
        ...state,
        iCurrentOnglet: iOnglet,
        iCurrentPage: iPage,
        lastRefresh: new Date().getTime(),
      }

    case REFRESH:
      return {
        ...state,
        lastRefresh: new Date().getTime(),
      }
    case REFRESH_VELIB:
      return {
        ...state,
        lastRefreshVelib: new Date().getTime(),
      }

    default:
      return state
  }
}
