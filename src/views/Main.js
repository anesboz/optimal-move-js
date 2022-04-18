import React, { Fragment } from 'react'
import Banner from 'components/Banner/Banner'
import Footer from 'components/Footer/Footer'
import Table from 'components/Table/Table'
import { getData } from 'actions/localstorage/generalActions'
import { connect } from 'react-redux'

function Main(props) {
  const { iCurrentOnglet, iCurrentPage } = props.mainBranch
  return (
    <div style={{ height: `100vh`, position: 'relative' }}>
      <div style={{ height: `30%` }}>
        <Banner />
      </div>
      <div style={{ height: `60%` }}>
        <Table
          onglet={getData(iCurrentOnglet)}
          iCurrentOnglet={iCurrentOnglet}
          iCurrentPage={iCurrentPage}
        />
      </div>
      <div
        style={{
          height: `10%`,
          position: 'absolute',
          bottom: 0,
          width: '100%',
        }}
      >
        <Footer
          onglets={getData()}
          iCurrentOnglet={iCurrentOnglet}
          iCurrentPage={iCurrentPage}
        />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  mainBranch: state.mainBranch,
})

export default connect(mapStateToProps)(Main)
