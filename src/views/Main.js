import React, { useState } from 'react'
import Banner from 'components/Banner/Banner'
import Footer from 'components/Footer/Footer'
import Table from 'components/Table/Table'
import { getData } from 'actions/localstorage/generalActions'
import { Grid } from '@mui/material'
import { gridStyle } from 'variables/styles'

export default function Main(props) {
  const [iPage, setIPage] = useState(null)
  const [iOnglet, setIOnglet] = useState(null)
  const [last, setLast] = useState(new Date())

  return (
    <Grid container className="green">
      {/* <Table
        onglet={getData(iCurrentOnglet)}
        iCurrentOnglet={iCurrentOnglet}
        iCurrentPage={iCurrentPage}
        lastRefreshVelib={lastRefreshVelib}
      /> */}
      <Footer />
    </Grid>
  )

  function refresh(params) {}
}
