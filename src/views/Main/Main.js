import React, { useState } from 'react'
import Footer from './components/Footer/Footer'
import Table from 'views/Main/components/Table/Table'
import { getData } from 'actions/localstorage/generalActions'
import { Grid } from '@mui/material'
import { gridStyle } from 'variables/styles'
import { connect } from 'react-redux'

export function Main(props) {
  const { iPage, iOnglet } = props.mainBranch

  return (
    <Grid container className="green">
      {/* <Table
        onglet={getData(iOnglet)}
        iOnglet={iOnglet}
        iPage={iPage}
        lastRefreshVelib={lastRefreshVelib}
      /> */}
      <Footer iOnglet={iOnglet} iPage={iPage} />
    </Grid>
  )
}

const mapStateToProps = (state) => ({
  mainBranch: state.mainBranch,
})

export default connect(mapStateToProps)(Main)
