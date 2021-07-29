import data from "../data";
import { connect } from "react-redux";
import OneButton from "./OneButton";
import styled from "styled-components";


const OngletsContainer = styled.div`
  display: block;
  overflow-x: scroll;
  overflow-y: hidden;
  position: absolute;
  bottom: 0;
  height: 10%;
  border: 1px solid gray;
  width: 100%;
  white-space: nowrap;
  /* background-color: #00aa91; */
`;
const Onglets = (props) => {
  return (
    <OngletsContainer>
      {data.map((onglet, index) => {
        return <OneButton key={index} onglet={onglet} />;
      })}
    </OngletsContainer>
  );
};

const mapStateToProps = (state) => ({
  currentOnglet: state.onglets.currentOnglet,
});

export default connect(mapStateToProps)(Onglets);