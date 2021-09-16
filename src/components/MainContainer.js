import React, { Fragment } from 'react'
import Onglets from "./Onglets"
import Table from "./Table"
import Dots from "./Dots"
import Plus from "./Plus"
import { connect } from 'react-redux'

 function MainContainer(props) {
  return (
    <Fragment>
      <Table />
      <Dots />
      <Onglets />
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  ongletsBranch: state.ongletsBranch,
})

export default connect(mapStateToProps)(MainContainer)