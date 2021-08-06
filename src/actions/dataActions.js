import test from "./debug.js";
import initialData from "../data";
import { FETCH_DATA, UPDATE_DIRECTION } from "../actions/types"
import { uploadOnglet } from "./ongletAction"
export function checkData() {
  return localStorage.getItem("data") != null
}

// export function updateData(newValue) {
//   localStorage.setItem("data", JSON.stringify(newValue))
//   return getData()
// }

const transportTypes = {
  m: "metros",
  b: "buses",
  r: "rers",
  t: "tramways",
  n: "noctiliens",
}

const ratpImgs = {
  m: "https://www.ratp.fr/sites/default/files/lines-assets/picto/metro/picto_metro_ligne-",
  b: "https://www.ratp.fr/sites/default/files/lines-assets/picto/busratp/picto_busratp_ligne-",
  n: "https://www.ratp.fr/sites/default/files/lines-assets/picto/noctilien/picto_noctilien_ligne-n",
  t: "https://www.ratp.fr/sites/default/files/lines-assets/picto/tram/picto_tram_ligne-t",
  r: "https://www.ratp.fr/sites/default/files/lines-assets/picto/rer/picto_rer_ligne-",
}

export const fetchData = () => (dispatch) => {
  // console.log("########## fetchData ########### ")
  let data = []
  if (localStorage.getItem("data") != null) {
    data = JSON.parse(localStorage.getItem("data"))
  } else {
    data = initialData
    localStorage.setItem("data", JSON.stringify(data))
  }
  // let toReturn = []
  // data.map((onglet) => {
  //   let list = onglet.list.map((page) =>
  //     page.map((q) => {
  //       if (!q.includes("velib")) {
  //         let v1 = q.replace(/^(\w+) (.+) (.)$/, "$1")
  //         let type = transportTypes[v1[0]]
  //         let code = v1.slice(1)
  //         let imgUrl = ratpImgs[v1[0]] + code + ".svg"
  //         let depart = q.replace(/^(\w+) (.+) (.)$/, "$2")
  //         let way = q.replace(/^(\w+) (.+) (.)$/, "$3").toUpperCase()
  //         let query = `https://api-ratp.pierre-grimaud.fr/v4/schedules/${type}/${code}/${depart.replace(
  //           / /g,
  //           "%20"
  //         )}/${way}`
  //         return {
  //           depart,
  //           imgUrl,
  //           query,
  //         }
  //       } else {
  //         let s = q.split(/(velib [0-9]+ )/)
  //         let depart = s[2].trim()
  //         let query = s[1].replace("velib", "").trim()
  //         return {
  //           depart,
  //           query,
  //         }
  //       }
  //     })
  //   )
  //   toReturn.push({
  //     name: onglet.name,
  //     logo: onglet.logo,
  //     description: onglet?.description,
  //     list: list,
  //   })
  // })
  // toReturn.map((e)=> console.log(e))
  dispatch({
    type: FETCH_DATA,
    payload: data,
  })
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
  dispatch({
    type: UPDATE_DIRECTION,
    payload: {
      index: [iOnglet, iPage, iRow],
      newQuery: data[iOnglet].list[iPage][iRow].query,
    },
  })
  uploadOnglet(iOnglet, data[iOnglet].list[iPage].map(e=> e.query))(dispatch)
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
