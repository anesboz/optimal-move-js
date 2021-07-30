import { ATTRIBUTE_ONGLET, RESET, UPLOAD_PAGE } from "./types"
import data from "../data"
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

export const attributeOnglet = (i) => (dispatch) => {
  reset()(dispatch)
  dispatch({
    type: ATTRIBUTE_ONGLET,
    payload: i,
  })
  uploadPage(i, 0)(dispatch)
}

export const reset = () => (dispatch) => {
  dispatch({
    type: RESET,
  })
}

// export const uploadPage = (page) => {
export const uploadPage = (currentOnglet, currentPage) => (dispatch) => {
  let page = data[currentOnglet].list[currentPage]
  // example q = "m7 Villejuif Leo Lagrange"
  page.map((q, i) => {
    let s = q.split(/\s(.+)/)
    let type = transportTypes[s[0][0]]
    let code = s[0].slice(1)
    let station = s[1].replace(/ /g, "%20")
    let way = "A"
    let query = `https://api-ratp.pierre-grimaud.fr/v4/schedules/${type}/${code}/${station}/${way}`
    console.log(query)
    let imgUrl = ratpImgs[s[0][0]] + code + ".svg"
    fetch(query)
      .then((res) => res.json())
      .then((data) => {
        let times = data.result.schedules.map((e) => e.message)
        dispatch({
          type: UPLOAD_PAGE,
          payload: {
            row: i,
            data: {
              imgUrl,
              times,
            }
          }
        })
      })
  })
}
