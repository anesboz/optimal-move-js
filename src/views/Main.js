import React, { Fragment, useEffect, useState } from "react"
import Banner from "components/Banner/Banner"
import Footer from "components/Footer/Footer"
import Table from "components/Table/Table"
import { defaultIndexesByTime } from "actions/ongletsTools"
import SettingsIcon from "@mui/icons-material/Settings"
import { Link, useLocation } from "react-router-dom"
import initialData from "data/initialData"
import { getData } from "actions/crudAction"

export default function Main(props) {
  const location = useLocation()
  const i_default_onglet = location.state?.i_default_onglet
  const i_default_page = location.state?.i_default_page
  const [i_onglet, setI_onglet] = useState(i_default_onglet)
  const [i_page, setI_page] = useState(i_default_page)
  const [refresh, setRefresh] = useState(null)
  // const onglets = JSON.parse(localStorage.getItem("data"))
  // localStorage.clear()
  var onglets =  getData()
  useEffect(() => {
    // localStorage.setItem("DEFAULT_INDEXES", `true`)
    // if (localStorage.getItem(`DEFAULT_INDEXES`) === `true`) {
    //   const { i_default_onglet, i_default_page } = defaultIndexesByTime()
    //   setI_onglet(i_default_onglet)
    //   setI_page(i_default_page)
    // }
  }, [])
  if (!onglets) return null
  return (
    <Fragment>
      {/* <Link to={`/addStation`} state={{ from: "occupation" }}> */}
      <SettingsIcon
        color="disabled"
        style={{ position: `absolute`, margin: 10, right: 0, zIndex: 10 }}
        onClick={() => alert(`censé contenir les setting pour les onglets`)}
      />
      {/* </Link> */}
      <Banner onClickImg={() => setI_onglet(null)} />
      {i_onglet != null ? (
        <Table
          onglets={onglets}
          i_onglet={i_onglet}
          i_page={i_page}
          onDotClick={(index) => {
            setI_page(index)
            setRefresh(new Date().getTime())
          }}
          refreshState={[refresh, setRefresh]}
        />
      ) : null}

      <Footer
        onglets={onglets}
        i_selectedOnglet={i_onglet}
        onButtonClick={(index) => {
          if (i_onglet !== index) setI_page(0)
          setI_onglet(index)
          setRefresh(new Date().getTime())
        }}
      />
    </Fragment>
  )
}
