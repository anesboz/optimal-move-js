import React, { Fragment, useEffect, useState } from 'react'
import Banner from 'components/Banner/Banner'
import Footer from 'components/Footer/Footer'
import Table from 'components/Table/Table'
import SettingsIcon from '@mui/icons-material/Settings'
import { getData } from 'actions/crud/generalCrud'
import { connect } from 'react-redux'
import { setOngletPage } from 'actions/mainActions'

function Main(props) {
  const { iCurrentOnglet, iCurrentPage } = props.mainBranch
  return (
    <Fragment>
      <SettingsIcon
        color="disabled"
        style={{ position: 'absolute', margin: 10, right: 0, zIndex: 10 }}
        onClick={() => alert('censé contenir les setting pour les onglets')}
      />
      <Banner onClickImg={() => setOngletPage(null, null)} />
      {iCurrentOnglet != null ? (
        <Table
          onglet={getData(iCurrentOnglet)}
          iCurrentOnglet={iCurrentOnglet}
          iCurrentPage={iCurrentPage}
        />
      ) : null}
      <Footer onglets={getData()} iCurrentOnglet={iCurrentOnglet} />
    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  mainBranch: state.mainBranch,
})

export default connect(mapStateToProps)(Main)
