import store from 'store'
import { REFRESH, SET_ONGLET_PAGE } from './types'

export const setOngletPage = (iOnglet, iPage = 0) => {
  store.dispatch({ type: SET_ONGLET_PAGE, payload: { iOnglet, iPage } })
}

export const refresh = () => store.dispatch({ type: REFRESH })
