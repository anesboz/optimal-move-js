import React, { Fragment, useEffect, useState } from "react"
import Banner from "components/Banner/Banner"
import Footer from "components/Footer/Footer"
import initialData from "variables/data"
import Table from "components/Table/Table"
import { defaultIndexesByTime } from "actions/utils"

export default function Main(props) {
  const [i_onglet, setI_onglet] = useState(null)
  const [i_page, setI_page] = useState(0)
  const [refresh, setRefresh] = useState(null)
  const onglets = JSON.parse(localStorage.getItem("data"))
  useEffect(() => {
    if (!localStorage.getItem("data")) {
      console.log(`🚩🚩🚩🚩🚩🚩🚩🚩 `)
      localStorage.setItem("data", JSON.stringify(initialData))
      localStorage.setItem("DEFAULT_INDEXES", `true`)
    }
    if (localStorage.getItem(`DEFAULT_INDEXES`) === `true`) {
      const { i_default_onglet, i_default_page } = defaultIndexesByTime()
      setI_onglet(i_default_onglet)
      setI_page(i_default_page)
    }
  }, [])
  if (!onglets) return null
  return (
    <Fragment>
      <Banner onClickImg={() => setI_onglet(null)} />
      {i_onglet != null ? (
        <Table
          onglets={onglets}
          i_selectedOnglet={i_onglet}
          i_selectedPage={i_page}
          onPagesChange={(index) => {
            setI_page(index)
            setRefresh(new Date().getTime())
          }}
          refresh={refresh}
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
