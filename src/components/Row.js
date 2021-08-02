import React, { Fragment } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import loading from "../media/icons/loading.gif"
import sideRow from "../media/icons/sideRow.png"

const RowContainer = styled.div`
  display: flex;
  height: 3.4rem;
  margin-bottom: 0.2rem;
  padding: 0;
  overflow: scroll;
`

const isHere = [
  "Train a l'approche",
  "A l'approche",
  "Train a quai",
  "A l'arret",
]
const isComing = ["0 mn", "1 mn", "2 mn"]

const problems = [
  "SERVICE TERMINE",
  "Schedules unavailable",
  "Service termine",
  "INFO INDISPO ....",
  "Train retarde",
  "SERVICE NON COMMENCE",
]

const Case = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
  margin: 0 0.1rem;
  padding: 0 0.5rem;
  color: ${(props) =>
    isHere.concat(isComing).includes(props.value) ? "orange" : "inital"};
  flex: ${(props) =>
    problems.includes(props.value) ? "1 0 66%" : "1 0 32.5%"};
  white-space: nowrap;
  overflow: hidden;
`

const Img = styled.img`
  height: 68%;
`
const ratpImgs = {
  m: "https://www.ratp.fr/sites/default/files/lines-assets/picto/metro/picto_metro_ligne-",
  b: "https://www.ratp.fr/sites/default/files/lines-assets/picto/busratp/picto_busratp_ligne-",
  n: "https://www.ratp.fr/sites/default/files/lines-assets/picto/noctilien/picto_noctilien_ligne-n",
  t: "https://www.ratp.fr/sites/default/files/lines-assets/picto/tram/picto_tram_ligne-t",
  r: "https://www.ratp.fr/sites/default/files/lines-assets/picto/rer/picto_rer_ligne-",
}

function Row(props) {
  let page = props.page[props.id]
  let s = props.q.split(/\s(.+)/)
  let imgUrl = ratpImgs[s[0][0]] + s[0].slice(1) + ".svg"
  return (
    <RowContainer>
      <Case>
        <Img src={imgUrl} />
      </Case>
      {[0, 1, 2, 3].map((i, j) => {
        if (!page?.times) {
          return (
            <Case key={j}>
              <Img src={loading} />
            </Case>
          )
        }
        if (!page.times?.[i]) {
          return null
        }
        return (
          <Case value={page?.times?.[i]} key={j}>
            <div className={isHere.includes(page.times[i]) ? "blink" : ""}>
              {page.times[i]}
            </div>
          </Case>
        )
      })}
      <Case key={5} style={{ flex: "1 0 18%" }}>
        <Img src={sideRow} />
      </Case>
    </RowContainer>
  )
}

const mapStateToProps = (state) => ({
  page: state.onglets.page,
})

export default connect(mapStateToProps)(Row)
