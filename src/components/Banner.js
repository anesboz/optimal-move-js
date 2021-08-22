import default_header from "../media/default_header.png"
import optimalMove from "../media/optimalMove.png"
import { resetAll } from "../actions/ongletAction"
import styled from "styled-components"
import { Fragment, useEffect } from "react"
import { connect } from "react-redux"
import { fetchData } from "../actions/ongletsAction"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom";

let h = 80
const ImgContainer = styled.div`
  height: ${h}%;
  background-color: rgb(249, 209, 25);
`
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  height: ${100 - h}%;
  width: 100%;
  border-bottom: 1px solid #dddddd;
  > * {
    flex: 1 1 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
`

const Img = styled.img`
  height: 63%;
  margin-left: 1rem;
`

const Banner = (props) => {
  const history = useHistory()
  return (
    <header style={{ height: "30%", width: '100%' }}>
        <ImgContainer className="center w-100" onClick={() => {
          props.resetAll()
          history.push("/")
        }}>
          <img src={default_header} className="h-100" />
        </ImgContainer>
      <Row>
        <div
          onClick={() => {
            localStorage.clear()
            window.location.reload()
          }}
        >
          <Img src={optimalMove} style={{ height: "60%" }} />
        </div>
        <div style={{ justifyContent: "center" }}>
          <Link to="/add">🌞 Météo 🌞</Link>
        </div>
      </Row>
    </header>
  )
}

export default connect(null, { resetAll, })(Banner)
