import store from 'store'
import { REFRESH, REFRESH_VELIB, SET_ONGLET_PAGE } from './types'

export const setOngletPage = (iOnglet, iPage = 0) => {
  store.dispatch({ type: SET_ONGLET_PAGE, payload: { iOnglet, iPage } })
}

export const refresh = () => store.dispatch({ type: REFRESH })

export const refreshVelib = () => store.dispatch({ type: REFRESH_VELIB })
