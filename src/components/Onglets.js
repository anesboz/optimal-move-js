import data from "../data";
import { connect } from "react-redux";
import OneButton from "./OneButton";
import styled from "styled-components";


const OngletsContainer = styled.div`
  position: absolute;
  bottom: 0;
  height: 10%;
  width: 100%;
  border: 1px solid gray;

  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
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