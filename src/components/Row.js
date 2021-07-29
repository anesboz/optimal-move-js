import React, { Fragment, useEffect } from 'react'
import { connect } from 'react-redux';
import styled from "styled-components";
import { attributeOnglet } from "../actions/ongletAction";
import loading from "../media/icons/loading.gif";

const RowContainer = styled.div`
  display: flex;
  height: 15%;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0.2rem;
  padding: 0;
`;

const Case = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
  width: 33%;
  height: 100%;
`
const TwoCase = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid gray;
  width: 66%;
  overflow-x: hidden;
  white-space: nowrap;
`;

const Img = styled.img`
  height: 60%;
`
const Loading = styled.img`
  height: 60%;
`;


function Row(props) {
  let i = props.id
  // console.log(props);
  let page = props.page[i];
  // let page = allpage[i]:
  // console.log(page);
  //Math.random() > .5
  let imgUrl = page?.imgUrl 
  // // let imgUrl = props.imgNtimes[0]
  let t1 = page?.times[0]
  let t2 = page?.times[1]
  console.log(t1);
  let condition = !t1 ||  t1?.trim().length < 6
  // alert(condition)
  console.log(condition);
  return (
    <RowContainer>
      <Case>
        <Img src={imgUrl ? imgUrl : loading} />
      </Case>
      {condition ? (
        <Fragment>
          <Case>{t1 ? t1 : <Loading src={loading} />}</Case>
          <Case>{t2 ? t2 : <Loading src={loading} />}</Case>
        </Fragment>
      ) : (
        <TwoCase>{t1}</TwoCase>
      )}
    </RowContainer>
  );
}

const mapStateToProps = (state) => ({
  page: state.onglets.page
})

export default connect(mapStateToProps, { attributeOnglet })(Row);