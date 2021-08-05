import { useEffect } from "react"
import { Provider } from "react-redux" //connect redux with react
import store from "./store"

import * as ls from "./actions/dataActions"
import initalData from "./data"

import Banner from "./components/Banner"
import Onglets from "./components/Onglets"
import Table from "./components/Table"
import Dots from "./components/Dots"
import Plus from "./components/Plus"

function App() {
  // HERE DATA IS FETCHED
  let data = ls.checkData() ? ls.getData() : ls.updateData(initalData)
  // console.log(data)
  return (
    <Provider store={store}>
      <Banner />
      <Table data={data} />
      <Dots />
      <Onglets data={data} />
    </Provider>
  )
}

export default App
