import default_header from "../media/default_header.png";
import optimalMove from "../media/optimalMove.png";
import { resetAll } from "../actions/ongletAction";
import styled from "styled-components";
import { Fragment } from "react";
import { connect } from "react-redux";

const Header = styled.header`
  height: 25%;
  background-color: rgb(249, 209, 25);
  text-align: center;
  border-bottom: 1px solid gray;
`
const Row = styled.div`
  height: 5%;
  border-bottom: 1px solid gray;
`;
const Banner = (props) =>{
  return (
    <Fragment >
      <Header className="center w-100" onClick={props.resetAll}>
        <img src={default_header} className="h-100" />
      </Header>
      <Row className="row d-flex justify-content-between w-100">
        <div className="col-4 h-100">
          <img src={optimalMove} className="h-75" />
        </div>
        <div className="center col-4">Meteo</div>
      </Row>
    </Fragment>
  );
}

export default connect(null, {resetAll})(Banner);