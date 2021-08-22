import initialData from "../data";
import { READ_ONGLETS, UPDATE_DIRECTION, ADD_STATION } from "./types"
import { uploadOnglet } from "./ongletAction"
import { ratpImgs } from "./constantes";
import {debug, flag} from '../debug'
import plusLogo from "../media/icons/plus.png"

// ONGLETS ACTIONS 
export const readOnglets = () => (dispatch) => {
  let data = []
  if (localStorage.getItem("data") != null) {
    data = JSON.parse(localStorage.getItem("data"))
  } else {
    data = initialData
    localStorage.setItem("data", JSON.stringify(data))
  }
  const allOnglets = data.map((e) => ({
    name: e.name,
    logo: e.logo,
  }))
  const last = {
    name: "addOnlget",
    logo: plusLogo,
  }
  allOnglets.push(last)
  dispatch({
    type: READ_ONGLETS,
    payload: allOnglets,
  })
}

export const addOnglet = (onglet) => (dispatch) => {
  let data = JSON.parse(localStorage.getItem("data"))
  data.push(onglet)
  localStorage.setItem("data", JSON.stringify(data))
  
  readOnglets()(dispatch)
}


export const changeDirection = (iOnglet, iPage, iRow)  => (dispatch) => {
  let data = JSON.parse(localStorage.getItem("data"))
  let q = data[iOnglet].list[iPage][iRow].query
  let acutalDirection = q.slice(-1)
  let newDirection = acutalDirection == 'R' ? 'A' : 'R'
  console.log("ancien requete:", q);
  console.log("new requete :")
  data[iOnglet].list[iPage][iRow].query = q.replace(/^(.*).$/, '$1'+newDirection)
  // console.log(data[iOnglet].list[iPage][iRow].query)
  localStorage.setItem('data', JSON.stringify(data))
  // maj state data.allOnglets
  dispatch({
    type: UPDATE_DIRECTION,
    payload: {
      index: [iOnglet, iPage, iRow],
      newQuery: data[iOnglet].list[iPage][iRow].query,
    },
  })
  uploadOnglet(iOnglet, data[iOnglet].list[iPage].map(e=> e.query), iPage)(dispatch)
}


// export function deleteData() {
//   localStorage.removeItem("data")
// }

// function deleteAllCookies() {
//   reset()
//   localStorage.clear()
//   console.log("localStorage DELETED!")
//   return "localStorage DELETED!"
// }

// function updateCookie() {
//   localStorage.setItem("c_Obj_List", JSON.stringify(_Obj_List))
//   localStorage.setItem("c_name", currentObjName)
// }


export const addStation = (item, iOnglet, iPage) => (dispatch) => {
  let type = item.transportTypes.toLowerCase()
  let code = item.code
  let imgUrl = /^[0-9]+$/.test(item.stationName)
    ? null
    : ratpImgs[type[0]] + code + ".svg"
  let depart = item.stationName
  let departSlug = depart.replace(/ /g, "%20")
  let query = `https://api-ratp.pierre-grimaud.fr/v4/schedules/${type}/${code}/${departSlug}/A`
  let newRow = { depart, imgUrl, query }
  // console.log(o)
  // maj state data.allOnglets
  dispatch({
    type: ADD_STATION,
    payload: { newRow, iOnglet, iPage },
  })
  uploadOnglet(iOnglet, iPage)(dispatch)
}