import React, { Fragment } from 'react'
import Banner from 'components/Banner/Banner'
import Footer from 'components/Footer/Footer'
import Table from 'components/Table/Table'
import { getData } from 'actions/localstorage/generalActions'
import { connect } from 'react-redux'

function Main(props) {
  const { iCurrentOnglet, iCurrentPage, lastRefreshVelib } = props.mainBranch
  return (
    <div style={{ height: `100vh`, position: 'relative' }}>
      <Banner />
      <div style={{ height: `60%` }}>
        <Table
          onglet={getData(iCurrentOnglet)}
          iCurrentOnglet={iCurrentOnglet}
          iCurrentPage={iCurrentPage}
          lastRefreshVelib={lastRefreshVelib}
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
