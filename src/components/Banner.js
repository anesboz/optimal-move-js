import default_header from "../media/default_header.png";
import optimalMove from "../media/optimalMove.png";
import { resetAll } from "../actions/ongletAction";
import styled from "styled-components";
import { Fragment } from "react";
import { connect } from "react-redux";

const Header = styled.header`
  height: 25%;
  background-color: rgb(249, 209, 25);
`
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  height: 6%;
  width: 100%;
  border-bottom: 1px solid #dddddd;
`

const Half = styled.div`
  flex: 1 1 100%;
  height: 100%;
  display: flex;
  align-items: center;
`

const Img = styled.img`
  height: 63%;
  margin-left: 1rem;
`

const Banner = (props) =>{
  return (
    <Fragment>
      <Header className="center w-100" onClick={props.resetAll}>
        <img src={default_header} className="h-100" />
      </Header>
      <Row>
        <Half onClick={() => window.location.reload()}>
          <Img src={optimalMove} style={{ height: "60%" }} />
        </Half>
        <Half style={{justifyContent: "center"}}>
          🌞  Météo  🌞
        </Half>
      </Row>
    </Fragment>
  )
}

export default connect(null, {resetAll})(Banner);